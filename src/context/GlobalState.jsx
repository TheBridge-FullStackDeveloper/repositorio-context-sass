import { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
  characters: [],
  x:""
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const res = await axios.get("https://rickandmortyapi.com/api/character");
        dispatch({
          type: "GET_CHARACTERS",
          payload: res.data.results,
        });//action
      };

      const x=()=>{
        // peticion api
        // dipatch "x"
      }
    
      return (
        <GlobalContext.Provider
          value={{
            characters: state.characters,
            getCharacters,
            x
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}  
