import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    background: rgba(180, 225, 192, .8);
    padding: 5px;
    width: 25%;
    font-size: 1.6rem;
    color: Blue;
    box-shadow: rgba(180, 225, 192, .8);
    border-radius: 1rem;
`;

const ButtonCreate = ({name, offSet, setOffSet, math}) => {
    return (
        <Button onClick={() => setOffSet(offSet + 20)}>{name}</Button>
    )    
}

export default ButtonCreate