import React, { useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import CharacterType from './CharacterType';
import CharacterStats from './CharacterStats';

const CharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    box-shadow: 1px 1px 3px 3px rgba(233, 233, 262, .5);
    margin: 1rem;
    /* border: 10px solid yellow; */
    border-radius: 2rem;
    background: rgba(255, 255, 255, .75)
`;

const CharacterHead = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 2% auto 0 auto;
    background: white;
    font-size: 3rem;
    background: rgba(220, 220, 60, .75);
    border-radius: 20px 20px 0 0; 
    `; 

const StyledImg = styled.img`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background: rgba(175,175,125, .8);
    border-radius: 0 0 10px 10px;
    width: 95%;
    height: 50%;
`;

const TypeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 2% auto;
    font-size: 1.6rem;
    

`;

const StatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.6rem;
    height: 50%;
    width: 95%;
    margin: 0 auto;

`;


const Character = ({url}) => {
    const [pokemonList, setPokemonList] = useState();
    useEffect(()=> {
        axios.get(`${url}`)
        .then(res => setPokemonList(res.data))
    }, [])



    if(!pokemonList){
        return null
    }
    return (
        <CharacterCard>
            <CharacterHead>{pokemonList.name.toUpperCase()}</CharacterHead>
            <StyledImg src={pokemonList.sprites.front_default} alt="pokemonsprite"/>
            <TypeDiv>Type: {pokemonList.types.map((el, index) => <CharacterType key={index} type={el.type.name.toUpperCase()}/>)}</TypeDiv>
            <StatsDiv>{pokemonList.stats.map((el, index) => <CharacterStats name={el.stat.name.toUpperCase()} key={index} stats={el.base_stat}/>)}</StatsDiv>
        </CharacterCard>
    )
}

export default Character
