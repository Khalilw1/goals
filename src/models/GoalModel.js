import { observable } from "mobx";

class GoalModel {
  @observable desc;
  @observable finished;
  id = -1; // default id error code

  store = null; // the backpointer to the store to enable mainly removel

  constructor(goal, store) {
    this.desc = goal.desc;
    this.finished = goal.finished;
    this.id = goal.id;
    
    this.store = store;

    this.toggle = this.toggle.bind(this);
    this.remove = this.remove.bind(this);
  }

  toggle() {
    this.finished = !this.finished;
  }

  remove() {
    this.store.goals.remove(this);
  }

  toJS() {
    return {
      id: this.id,
      desc: this.desc,
      finished: this.finished
    }
  }
}

export default GoalModel;