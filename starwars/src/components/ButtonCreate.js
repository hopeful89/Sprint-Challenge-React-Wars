import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    /* display: flex; */
`;

const ButtonCreate = ({name, offSet, setOffSet, math}) => {
    return (
        <Button onClick={() => setOffSet(offSet + 20)}>{name}</Button>
    )    
}

export default ButtonCreate