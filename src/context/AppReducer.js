
const characters = (state, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,//res.data.results
      };
    //   case "X"
    // return{
    //     ...state,
    //     x:"y"
    // }
    default:
      return state;
  }
};

export default characters;
