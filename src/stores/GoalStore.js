import { observable, computed, reaction } from "mobx";
import GoalModel from '../models/GoalModel';

class GoalStore {
  @observable goals = [];

  @computed get unfinished() {
      return this.goals.filter(goal => !goal.finished);
  }

  @computed get finished() {
    return this.goals.filter(goal => goal.finished);
  }

  add(desc) {
    this.goals.push(new GoalModel({id: this.goals.length || 0, desc: desc, finished: false}, this));
  }

  toJS() {
    return this.goals.map(goal => goal.toJS());
  }

  saveLocalStorage() {
    reaction(
      () => this.toJS(),
      goals => localStorage.setItem('goals', JSON.stringify(goals))
    );
  }

  static collectLocalStorage() {
    const store = new GoalStore();

    const goals = JSON.parse(localStorage.getItem('goals')) || [];
        
    store.goals = goals.map(goal => new GoalModel(goal, store));

    return store;
  }
}

export default GoalStore;