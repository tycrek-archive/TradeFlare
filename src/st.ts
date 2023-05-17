import { STErrorResponse, STRegisterResponse, STSignInResponse } from "./stResponse";

const BASE = 'https://api.spacetraders.io/v2';

const register = async (symbol: string, faction: string) => {
	const res = await fetch(`${BASE}/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ symbol, faction })
	});

	const data: any = await res.json();

	if (res.status !== 200 && data.error) {
		const error: STErrorResponse = data;
		throw new Error(error.error.message);
	}

	return data as STRegisterResponse;
};

const signIn = async (token: string) => {
	const res = await fetch(`${BASE}/my/agent`, {
		method: 'GET',
		headers: { Authorization: `Bearer ${token}` }
	});

	const data: any = await res.json();

	if (res.status !== 200 && data.error) {
		const error: STErrorResponse = data;
		throw new Error(error.error.message);
	}

	return data as STSignInResponse;
};

export default {
	register,
	signIn,
}
