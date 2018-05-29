import React, { Component } from "react"
import { observer } from "mobx-react"
import { Checkbox, Icon } from 'antd';

@observer class Goal extends Component {
	render() {
		return (
			<div>
				<Checkbox 
					onClick={ this.props.goal.toggle } 
					checked={ this.props.goal.finished } 
					className={ this.props.goal.finished ? "crossed" : ""}
				>
					{ this.props.goal.desc }
				</Checkbox>
				<div className="floated"><Icon type="close" onClick={ this.props.goal.remove } className="inside" /></div>
			</div>
		);
	}

}

export default Goal;