import React from 'react'
import styled from 'styled-components'

const TypeParagraph = styled.p`
    color: ${props => (props.type === 'FIRE'
                       ? 'red'
                       : (props.type === 'WATER'
                       ? 'blue'
                       : (props.type === 'FLYING'
                       ? 'orange'
                       : (props.type === 'POISON'
                       ? 'purple'
                       : (props.type === 'NORMAL' 
                       ? 'slategrey'
                       : (props.type === 'GRASS'
                       ? 'green'
                       : 'firebrick'
                       ))))))}
`;

const CharacterType = ({type}) =>{
return <TypeParagraph type={type}>{type}</TypeParagraph>
}

export default CharacterType