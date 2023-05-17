export const Elements = {
	Core: { // * Core elements
		userTokenInput: document.querySelector('#UserTokenInput') as HTMLInputElement
	},
	NewUser: { // * New user flow
		newButton: document.querySelector('#NewUserButton') as HTMLElement,
		newDialog: document.querySelector('#NewUserModal') as HTMLElement,

		callSignInput: document.querySelector('#NewUserCallSign') as HTMLInputElement,
		factionInput: document.querySelector('#NewUserFaction') as HTMLInputElement,
		registerButton: document.querySelector('#NewUserRegister') as HTMLElement,

		successDialog: document.querySelector('#NewUserSuccessDialog') as HTMLElement,
		successName: document.querySelector('#NUSDName') as HTMLElement,
		copyNewTokenButton: document.querySelector('#NUSDCopyNewTokenButton') as HTMLElement,
	},
	AgentPanel: { // * Agent panel
		name: document.querySelector('#AgentName') as HTMLElement,
		accountId: document.querySelector('#AgentAccountId') as HTMLElement,
		location: document.querySelector('#AgentLocation') as HTMLElement,
	}
}
