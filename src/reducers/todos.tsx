enum ActionType {
  ADD_TODO = "ADD_TODO",
  DELTE_TODO = "DELTE_TODO",
}

interface Action {
  type: ActionType;
  text: string;
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    default:
      return state;
  }
};

export default todos;
