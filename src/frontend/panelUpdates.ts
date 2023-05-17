import { Agent } from '../stTypes';
import { Elements } from './elements';

/**
 * Sets the information in the agent panel
 */
export const updateAgentPanel = (agent: Agent, reset = false) => {
	if (reset) {
		console.log('Resetting agent panel');
		// (1/2) Reset values
		Elements.AgentPanel.name.innerText = '&nbsp;';
		Elements.AgentPanel.accountId.innerText = '&nbsp;';
		Elements.AgentPanel.location.innerText = '&nbsp;';
		// (2/2) Hide elements
		Elements.AgentPanel.name.classList.add('hidden');
		Elements.AgentPanel.accountId.classList.add('hidden');
		Elements.AgentPanel.location.classList.add('hidden');
	} else {
		// (1/2) Set values
		Elements.AgentPanel.name.innerText = agent.symbol;
		Elements.AgentPanel.accountId.innerText = agent.accountId;
		Elements.AgentPanel.location.innerText = agent.headquarters;
		// (2/2) Show elements
		Elements.AgentPanel.name.classList.remove('hidden');
		Elements.AgentPanel.accountId.classList.remove('hidden');
		Elements.AgentPanel.location.classList.remove('hidden');
	}
};
