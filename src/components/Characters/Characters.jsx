import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Characters = () => {
  const { characters, getCharacters,x } = useContext(GlobalContext);

  useEffect(() => {
    getCharacters();
  }, []);

  if(characters.length <= 0){
    return <p>Cargando...</p>
  }

  return <div>{characters.map(character=>{
    return (
        <div key={character.id}>
            <img src={character.image} alt="" />
            <p>{character.name}</p>
        </div>
    )
  })}</div>;
};

export default Characters;
