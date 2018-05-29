import React from 'react';

import GoalList from './components/GoalList'
import Goal from './components/Goal'

import GoalModel from './models/GoalModel';

import GoalStore from './stores/GoalStore';
import './App.css'
import { Card } from 'antd';

const store = GoalStore.collectLocalStorage();

store.saveLocalStorage();

class App extends React.Component {
  render() {
    return (    
    	<Card className="container">    
      		<GoalList goals={ store } />
    	</Card>
    );
  }
}

export default App;
