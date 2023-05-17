import { Agent, Faction } from '../stTypes';
import { Elements } from './elements';
import { updateAgentPanel, updateFactionPanel } from './panelUpdates';

// * New user flow
// Open the new user dialog
Elements.NewUser.newButton.addEventListener('click', (event) => (Elements.NewUser.newDialog as any).show());

// Attempts to register the user
Elements.NewUser.registerButton.addEventListener('click', (event) => {

	// Get the value of the inputs
	let callSign = Elements.NewUser.callSignInput.value;
	let faction = Elements.NewUser.factionInput.value;

	// Fix faction
	if (faction == null || faction == '')
		faction = 'COSMIC';

	// Call the API
	fetch(`/api/v1/register/${callSign}/${faction}`)
		.then((res) => res.json())
		.then(async (data: any) => {
			// ! This doesn't error handle properly yet

			// Set the primary token input
			Elements.Core.userTokenInput.value = data.token;

			// Set the name in the success dialog
			Elements.NewUser.successName.innerText = data.agent.symbol;

			// Do a me fetch
			const me = await meFetch(data.token);
			updateAgentPanel(me.agent);
			updateFactionPanel(me.factions[0]);

			// Swap dialogs
			(Elements.NewUser.newDialog as any).hide();
			(Elements.NewUser.successDialog as any).show();
		})
		.catch((err) => console.error(err));
});

// Copy the new token to the clipboard
Elements.NewUser.copyNewTokenButton.addEventListener('click', (event) => {
	navigator.clipboard.writeText(Elements.Core.userTokenInput.value)
		.then(() => Elements.NewUser.copyNewTokenButton.innerHTML = 'Copied!')
		.catch((err) => (console.error(err), alert('An error occurred, see console for details')));
});

// data.agent, data.factions[], data.contracts[], data.ships[] 
const meFetch = (token): Promise<{ agent: Agent, factions: Faction[], contracts: any[], ships: any[] }> => // todo: update types for contracts and ships
	fetch(`/api/v1/me/${token}`)
		.then((res) => {
			if (res.status === 200) return res.json();
			else throw new Error(`HTTP ${res.statusText}`);
		});

// * Sign in flow
Elements.Core.userTokenInput.addEventListener('sl-input', (event) => {
	// todo: people probably don't want this to be a GET path thing
	fetch(`/api/v1/signin/${Elements.Core.userTokenInput.value}`)
		.then((res) => {
			if (res.status === 200) return res.json();
			else throw new Error(`HTTP ${res.statusText}`);
		})
		.then((data: any) => updateAgentPanel(data))

		// Update "me" data
		.then(() => meFetch(Elements.Core.userTokenInput.value))
		.then((data) => (console.log(data),
			updateFactionPanel(data.factions[0])))

		.catch((err) => (console.error(err), updateAgentPanel(null, true)));
});

// * Agent panel
// Copy account ID to clipboard
Elements.AgentPanel.accIdCopyButton.addEventListener('click', (event) => {
	navigator.clipboard.writeText(Elements.AgentPanel.accountId.innerText)
		.then(() => (Elements.Core.copySuccessDialog as any).show())
		.catch((err) => (console.error(err), alert('An error occurred, see console for details')));
});
