export const Elements = {
	Core: { // * Core elements
		userTokenInput: document.querySelector('#UserTokenInput') as HTMLInputElement
	},
	NewUser: { // * New user flow
		newButton: document.querySelector('#NewUserButton') as HTMLElement,
		newDialog: document.querySelector('#new-modal') as HTMLElement,

		registerButton: document.querySelector('sl-button#register') as HTMLElement,
		callSignInput: document.querySelector('sl-input#call-sign') as HTMLInputElement,
		factionInput: document.querySelector('sl-input#faction') as HTMLInputElement,

		successDialog: document.querySelector('#success-dialog') as HTMLElement,
		successName: document.querySelector('#success-name') as HTMLElement,
		copyNewTokenButton: document.querySelector('#CopyNewTokenButton') as HTMLElement,
	},
	AgentPanel: { // * Agent panel
		name: document.querySelector('#agent-name') as HTMLElement,
		accountId: document.querySelector('#account-id') as HTMLElement,
		location: document.querySelector('#agent-location') as HTMLElement,
	}
}
