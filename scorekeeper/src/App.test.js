import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

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

it('should add new player', () => {
  	const app = shallow(<App />);
  	const players = [];
  	app.setState({ players });
  	const onPlayerAdd = app.find(AddPlayer).prop('onPlayerAdd');
  	onPlayerAdd('Ania');
  	const playersAfterUpdate = app.state('players'); 
  	expect(playersAfterUpdate[0]).toEqual({name: 'Ania', score: 0});
});

it('should delete player', () => {
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
  	const onPlayerRemove = app.find(PlayersList).prop('onPlayerRemove');
  	onPlayerRemove(0);
  	const playersAfterUpdate = app.state('players');
  	expect(playersAfterUpdate[0].name).toEqual('Antoś');
});