export interface Agent {
	accountId: string;
	symbol: string;
	headquarters: string;
	credits: number;
}

export interface Contract {
	id: string;
	factionSymbol: string;
	type: string; // 'PROCUREMENT', ...
	terms: {
		deadline: string;
		payment: {
			onAccepted: number;
			onFulfilled: number;
		}
		deliver: {
			tradeSymbol: string; // 'IRON_ORE', ...
			destinationSymbol: string;
			unitsRequired: number;
			unitsFulfilled: number;
		}[]
	}
	accepted: boolean;
	fulfilled: boolean;
	expiration: string;
}

export interface Faction {
	symbol: string;
	name: string;
	description: string;
	headquarters: string;
	traits: {
		symbol: string; // 'INNOVATIVE', 'BOLD', 'VISIONARY', 'CURIOUS'
		name: string;
		description: string;
	}[]
}

export interface Ship {
	symbol: string;
	nav: {
		systemSymbol: string;
		waypointSymbol: string;
		route: {
			departure: {
				symbol: string;
				type: string; // 'PLANET', ...
				systemSymbol: string;
				x: number;
				y: number;
			}
			destination: {
				symbol: string;
				type: string; // 'PLANET', ...
				systemSymbol: string;
				x: number;
				y: number;
			}
			arrival: string;
			departureTime: string;
		}
		status: string; // 'DOCKED', ...
		flightMode: string; // 'CRUISE', ...
	}
	crew: {
		current: number;
		capacity: number;
		required: number;
		rotation: string; // 'STRICT', ...
		morale: number;
		wages: number;
	}
	fuel: {
		current: number;
		capacity: number;
		consumed: {
			amount: number;
			timestamp: string;
		}
	}
	frame: {
		symbol: string; // 'FRAME_FRIGATE', ...
		name: string;
		description: string;
		moduleSlots: number;
		mountingPoints: number;
		fuelCapacity: number;
		condition: number;
		requirements: {
			power: number;
			crew: number;
		}
	}
	reactor: {
		symbol: string; // 'REACTOR_FISSION_I', ...
		name: string;
		description: string;
		condition: number;
		speed: number;
		requirements: {
			power: number;
			crew: number;
		}
	}
	engine: {
		symbol: string; // 'ENGINE_ION_DRIVE_II', ...
		name: string;
		description: string;
		condition: number;
		speed: number;
		requirements: {
			power: number;
			crew: number;
		}
	}
	modules: {
		symbol: string; // 'MODULE_CARGO_HOLD_I', 'MODULE_CREW_QUARTERS_I', 'MODULE_MINERAL_PROCESSOR_I', 'MODULE_JUMP_DRIVE_I', 'MODULE_WARP_DRIVE_I', ...
		name: string;
		description: string;
		capacity?: number;
		range?: number;
		requirements: {
			power: number;
			crew: number;
			slots?: number;
		}
	}[]
	mounts: {
		symbol: string; // 'MOUNT_SENSOR_ARRAY_I', 'MOUNT_MINING_LASER_I', 'MOUNT_SURVEYOR_I', ...
		name: string;
		description: string;
		strength?: number;
		deposits?: string[];
		requirements: {
			power: number;
			crew: number;
		}
	}[]
	registration: {
		name: string;
		factionSymbol: string;
		role: string; // 'COMMAND', ...
	}
	cargo: {
		capacity: number;
		units: number;
		inventory: {
			symbol: string;
			name: string;
			description: string;
			units: number;
		}[]
	}
}
