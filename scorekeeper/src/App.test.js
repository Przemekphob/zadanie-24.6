import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  	shallow(<App />);
});

it('should update player score', () => {
  	const app = shallow(<App />);
  	const players = [
	    {
	      name: 'Kunegunda',
	      score: 5,
	    },
	    {
	      name: 'Antoś',
	      score: 0,
	    }
  	];
  	app.setState({ players });
  	const onScoreUpdate = app.find(PlayersList).prop('onScoreUpdate');
  	onScoreUpdate(0, 5);
  	const playersAfterUpdate = app.state('players');
  	expect(playersAfterUpdate[0].score).toEqual(10);
});