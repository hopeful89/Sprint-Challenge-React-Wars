import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character'
import ButtonCreate from './components/ButtonCreate'
import background from './images/pk-bg.jpg';

const AppContainer = styled.div`
background-image: url(${background});
background-size: cover;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 2vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`;

function App() {
  const [pokemon, setPokemon] = useState()
  const [offSet, setOffSet] = useState(0);
  const [limit, setLimit] = useState(20);



  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`)
    .then(res =>{
      setPokemon(res.data.results);
    })
    .catch(err => console.log('error from app call', err))
  }, [offSet])

  if(!pokemon){
    return <div>loading</div>
  }

  return(
    <AppContainer>
      <ButtonContainer>
        <ButtonCreate name='Last Page' offSet={offSet} setOffSet={setOffSet} math='sub'/>
        <ButtonCreate name='Next Page' offSet={offSet} setOffSet={setOffSet} math='add'/>
      </ButtonContainer>
      <CardContainer>
        {pokemon.map(obj => {
          return <Character pokemon={obj.name} url={obj.url} key={obj.url}/>})}
      </CardContainer>


    </AppContainer>)
}

export default App;