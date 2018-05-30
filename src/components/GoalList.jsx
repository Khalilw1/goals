import React, { Component } from "react";
import ReactDOM from "react-dom"
import { observer } from "mobx-react"; 

import Goal from "./Goal";

import { Input, Tabs }      from "antd";

const TabPane = Tabs.TabPane;

@observer class GoalList extends Component {
  render() {
    return (
      <div>
        <h3 align="center">Goals</h3>
        <Input ref="desc" onKeyDown={ this.addGoal } className="io" />
        
        <Tabs tabPosition="top">
          <TabPane tab="Active" key="1">
          {
            this.props.goals.unfinished.map(goal=> <Goal key={ goal.id } goal={ goal } />)
          }
          </TabPane>
          
          <TabPane tab="Finished" key="2">
          {
            this.props.goals.finished.map(goal => <Goal key={ goal.id } goal={ goal } />)
          }
          </TabPane>
        </Tabs>
      </div>
    );
  }

  addGoal = (e) =>  {
    // quick check on key being pressed down. 13 means enter key has been pressed.
    if (e.keyCode !== 13)
      return ;

    e.preventDefault();

    let desc = ReactDOM.findDOMNode(this.refs.desc).value.trim();

    if (desc) {
      this.props.goals.add(desc);
      ReactDOM.findDOMNode(this.refs.desc).value = '';
    }
  }
}

export default GoalList;