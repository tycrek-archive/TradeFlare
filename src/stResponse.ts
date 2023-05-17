import { Agent, Contract, Faction, Ship } from './stTypes';

export interface STErrorResponse {
	error: {
		message: string;
		code: number;
		data: any;
	}
}

export interface STRegisterResponse {
	token: string;
	agent: Agent;
	contract: Contract;
	faction: Faction;
	ship: Ship;
}

export interface STSignInResponse {
	agent: Agent;
}
