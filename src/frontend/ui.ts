const newDialog = document.querySelector('#new-modal');
const successDialog = document.querySelector('#success-dialog');
const newButton = document.querySelector('sl-button#new');
const registerButton = document.querySelector('sl-button#register');
const input = (document.querySelector('sl-input#token') as HTMLInputElement);

newButton.addEventListener('click', (event) => (newDialog as any).show());

registerButton.addEventListener('click', (event) => {
	// Get the value of the inputs
	let callSign = (document.querySelector('sl-input#call-sign') as HTMLInputElement).value;
	let faction = (document.querySelector('sl-input#faction') as HTMLInputElement).value;

	// Fix faction
	if (faction == null || faction == '')
		faction = 'COSMIC';

	console.log(`Call sign: ${callSign}`);
	console.log(`Faction: ${faction}`);

	fetch(`/api/v1/register/${callSign}/${faction}`)
		.then(res => res.json())
		.then((data: any) => {
			(document.querySelector('#token') as HTMLInputElement).value = data.data.token;
			(document.querySelector('#copyToken') as HTMLElement).innerText = data.data.token;
			(document.querySelector('#success-name') as HTMLElement).innerText = data.data.agent.symbol;

			(document.querySelector('#agent-name') as HTMLElement).innerText = data.data.agent.symbol;
			(document.querySelector('#account-id') as HTMLElement).innerText = data.data.agent.accountId;
			(document.querySelector('#agent-location') as HTMLElement).innerText = data.data.agent.headquarters;

			(newDialog as any).hide();
			(successDialog as any).show();
		})
		.catch(err => console.error(err));
});

input.addEventListener('sl-input', (event) => {
	// Get the value of the input
	console.log(`Token: ${(event.target as HTMLInputElement).value}`);

	fetch(`/api/v1/signin/${input.value}`)
		.then(res => res.json())
		.then((data: any) => {
			console.log(data);
			(document.querySelector('#agent-name') as HTMLElement).innerText = data.data.symbol;
			(document.querySelector('#account-id') as HTMLElement).innerText = data.data.accountId;
			(document.querySelector('#agent-location') as HTMLElement).innerText = data.data.headquarters;
		})
		.catch(err => console.error(err));
});
