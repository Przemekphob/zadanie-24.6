import PlayersList from './PlayersList';
import React from 'react';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
 	shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
	const players = [
	    {
	        name: 'Kunegunda',
	        score: 5
	    },
	    {
	        name: 'Antoś',
	        score: 0
	    }
	]
	const playerComponent = mount(<PlayersList players={players} />);
	const expectedPlayersNumber = playerComponent.find('li').length;
	expect(expectedPlayersNumber).toEqual(2);
});