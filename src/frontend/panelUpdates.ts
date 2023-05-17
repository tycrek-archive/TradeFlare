import { Agent, Faction } from '../stTypes';
import { Elements } from './elements';

function commaDelimNumbers(num: number) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
		Elements.AgentPanel.credits.innerText = '&nbsp;';
		(Elements.AgentPanel.avatar as any).image = null;
		// (2/2) Hide elements
		Elements.AgentPanel.detailsHider.classList.add('hidden');
	} else {
		// (1/2) Set values
		Elements.AgentPanel.name.innerText = agent.symbol;
		Elements.AgentPanel.accountId.innerText = agent.accountId;
		Elements.AgentPanel.accIdTooltip.setAttribute('content', agent.accountId);
		Elements.AgentPanel.location.innerText = agent.headquarters;
		Elements.AgentPanel.credits.innerText = commaDelimNumbers(agent.credits);
		(Elements.AgentPanel.avatar as any).image = `https://robohash.org/${agent.symbol}.png?size=128x128&set=set4&bgset=bg1`;
		// (2/2) Show elements
		Elements.AgentPanel.detailsHider.classList.remove('hidden');
	}
};

export const updateFactionPanel = (faction: Faction, reset = false) => {
	if (reset) {
		console.log('Resetting faction panel');
		// (1/2) Reset values
		Elements.FactionPanel.symbol.innerText = '&nbsp;';
		Elements.FactionPanel.reputation.innerText = '&nbsp;';
		// (2/2) Hide elements
		Elements.FactionPanel.detailsHider.classList.add('hidden');
	} else {
		// (1/2) Set values
		Elements.FactionPanel.symbol.innerText = faction.symbol;
		Elements.FactionPanel.reputation.innerText = commaDelimNumbers(faction.reputation);
		// (2/2) Show elements
		Elements.FactionPanel.detailsHider.classList.remove('hidden');
	}
};
