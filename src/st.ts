import { STErrorResponse, STRegisterResponse, STSignInResponse } from "./stResponse";

const BASE = 'https://api.spacetraders.io/v2';

const register = async (symbol: string, faction: string) => {
	const res = await fetch(`${BASE}/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ symbol, faction })
	});

	console.log(`[SpaceTraders::Registration] ${res.status} ${res.statusText}`);
	const data: any = await res.json();

	if (`${res.status}`[0] != '2' || data.error) {
		console.error(`[SpaceTraders::Registration] Error: ${data.error.message}`);
		throw new Error(data.error.message);
	}

	return data.data as STRegisterResponse;
};

const signIn = async (token: string) => {
	const res = await fetch(`${BASE}/my/agent`, {
		method: 'GET',
		headers: { Authorization: `Bearer ${token}` }
	});

	console.log(`[SpaceTraders::SignIn] ${res.status} ${res.statusText}`);
	const data: any = await res.json();

	if (res.status !== 200 || data.error) {
		console.error(`[SpaceTraders::SignIn] Error: ${data.error.message}`);
		throw new Error(data.error.message);
	}

	return data.data as STSignInResponse;
};

const getMe = async (token: string) => {
	const myUrls = [
		BASE.concat('/my/agent'),
		BASE.concat('/my/factions'),
		BASE.concat('/my/contracts'),
		BASE.concat('/my/ships'),
	];

	const res = await Promise.all(myUrls.map((url: string) => fetch(url, {
		method: 'GET',
		headers: { Authorization: `Bearer ${token}` }
	})));

	const data: any[] = await Promise.all(res.map((r) => r.json()));
	const errors = data.filter((d) => d.error);

	if (errors.length > 0) {
		const msg = `[SpaceTraders::getMe] Unknown Error Sig-niu1bas4gff4dy2q8yr`;
		console.error(msg);
		throw new Error(msg);
	}

	const [agent, factions, contracts, ships] = data;

	return {
		agent: agent.data,
		factions: factions.data,
		contracts: contracts.data,
		ships: ships.data,
	};
}

export default {
	register,
	signIn,
	getMe,
}
