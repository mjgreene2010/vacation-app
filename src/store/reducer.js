const currentState = {
    likesCount = 0
}

const reducer = (state = currentState, action) => {
  switch (action.type) {
    case 'INCREASE_LIKES':
      return { ...state, likesCount: state.trips.likesCount + 1 };
      break;
    case 'DECREASE_LIKES':
      return { ...state, likesCount: cstate.trips.likesCount - 1 };
      break;
    default:
      return state;
  }
};

export default reducer;
