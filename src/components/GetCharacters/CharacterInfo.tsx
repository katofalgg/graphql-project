import React from "react";

export type character = {
    typename: string,
    name: string,
    id: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
}

interface ICharacterInfo {
    characterInfo: character
}
const CharacterInfo: React.FC<ICharacterInfo> = ({characterInfo}) => {

    return (
        <> {characterInfo.name ? <>
            <h2>{characterInfo.name}</h2>
            <img alt='' src={characterInfo.image}/>
            <h4>Status: {characterInfo.status}</h4>
            <h4>Species: {characterInfo.species}</h4>
            <h4>Type: {characterInfo.type ? characterInfo.type : 'not found'}</h4>
            <h4>Gender: {characterInfo.gender}</h4>
        </> : <h3>Select a hero to see information</h3>}
        </>
    );
}
export default CharacterInfo;

