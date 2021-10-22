import React, {useEffect, useState} from "react";
import {useQuery} from '@apollo/client';
import {LOAD_CHARACTERS} from "../../GraphQL/Queries";
import CharacterInfo, {character} from "./CharacterInfo";

export type characters = {
    typename: string,
    name: string,
    id: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
}[];

const GetCharacters: React.FC = () => {
    const [page, setPage] = useState(1);
    const {error, loading, data} = useQuery(LOAD_CHARACTERS(page));
    const [characters, setCharacters] = useState<characters>([]);
    const [characterInfo, setCharacterInfo] = useState({
        typename: '',
        name: '',
        id: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        image: '',
    });
    const ViewInfo = (character: character) => {
        setCharacterInfo(character);
    };
    useEffect(() => {
        if (data) {
            setCharacters([...characters, ...data.characters.results]);
        } else if (error) {
            console.log(error)
        }
    }, [data, page]);

    return (
        <>
            {
                loading ? <h3>Загрузка...</h3> : <>
                    <ul>
                        {characters.map((character: character) => (
                            <li key={character.id} onClick={() => ViewInfo(character)}>{character.name}</li>
                        ))}
                        <button onClick={() => setPage(page => page + 1)}>more</button>
                    </ul>
                </>
            }
            <div className='characters_info'><CharacterInfo characterInfo={characterInfo}/></div>
        </>
    );
};
export default GetCharacters;

