const reducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
          id: Math.random(), // not really unique but it's just an example
          title: action.title,
          description: action.description
        }
      ];
    default:
      return state;
  }
}

export default reducer
