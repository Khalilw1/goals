import React from 'react';

// Components imports.
import GoalList from './components/GoalList'
import Goal from './components/Goal'

// Models imports.
import GoalModel from './models/GoalModel';

// Stores imports.
import GoalStore from './stores/GoalStore';

// Custom CSS and Design imports.
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
