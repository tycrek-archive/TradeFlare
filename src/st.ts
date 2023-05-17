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

	if (res.status !== 200 || data.error) {
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

export default {
	register,
	signIn,
}
