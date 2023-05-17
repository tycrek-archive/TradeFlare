export const Elements = {
	Core: {
		userTokenInput: document.querySelector('#UserTokenInput') as HTMLInputElement,
		copySuccessDialog: document.querySelector('#CopySuccessDialog') as HTMLElement,
	},
	NewUser: {
		newButton: document.querySelector('#NewUserButton') as HTMLElement,
		newDialog: document.querySelector('#NewUserModal') as HTMLElement,

		callSignInput: document.querySelector('#NewUserCallSign') as HTMLInputElement,
		factionInput: document.querySelector('#NewUserFaction') as HTMLInputElement,
		registerButton: document.querySelector('#NewUserRegister') as HTMLElement,

		successDialog: document.querySelector('#NewUserSuccessDialog') as HTMLElement,
		successName: document.querySelector('#NUSDName') as HTMLElement,
		copyNewTokenButton: document.querySelector('#NUSDCopyNewTokenButton') as HTMLElement,
	},
	AgentPanel: {
		detailsHider: document.querySelector('#AgentDetailsHider') as HTMLElement,
		avatar: document.querySelector('#AgentAvatar') as HTMLElement,

		name: document.querySelector('#AgentName') as HTMLElement,
		accIdTooltip: document.querySelector('#AgentAccountIdTooltip') as HTMLElement,
		accIdCopyButton: document.querySelector('#AgentAccountIdCopyButton') as HTMLElement,
		location: document.querySelector('#AgentLocation') as HTMLElement,
		credits: document.querySelector('#AgentCredits') as HTMLElement,
		accountId: document.querySelector('#AgentAccountId') as HTMLElement,
	},
	FactionPanel: {
		detailsHider: document.querySelector('#FactionDetailsHider') as HTMLElement,
		symbol: document.querySelector('#FactionSymbol') as HTMLElement,
		reputation: document.querySelector('#FactionReputation') as HTMLElement,
	}
}
