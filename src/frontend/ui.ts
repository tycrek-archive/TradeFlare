import { Elements } from './elements';
import { updateAgentPanel } from './panelUpdates';

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
		.then((data: any) => {
			// ! This doesn't error handle properly yet

			// Set the primary token input
			Elements.Core.userTokenInput.value = data.token;

			// Set the name in the success dialog
			Elements.NewUser.successName.innerText = data.agent.symbol;

			// Set the agent info in the agent panel
			updateAgentPanel(data);

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

// * Sign in flow
Elements.Core.userTokenInput.addEventListener('sl-input', (event) => {
	fetch(`/api/v1/signin/${Elements.Core.userTokenInput.value}`)
		.then((res) => {
			if (res.status === 200) return res.json();
			else throw new Error(`HTTP ${res.statusText}`);
		})
		.then((data: any) => updateAgentPanel(data))
		.catch((err) => (console.error(err), updateAgentPanel(null, true)));
});
