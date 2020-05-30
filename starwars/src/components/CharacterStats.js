import React from 'react'
import styled from 'styled-components'

const StatsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StatsParagraphName = styled.p`
    color: red;
`;
const StatsParagraphStats = styled.p`
    color: ${props => (props.stats > 80 ? 'magenta': 'darkslategray')};
    font-size: ${props => (props.stats > 80 ? '1.8rem': 'yellow')};
`;



const CharacterStats = ({name, stats}) =>{

console.log(stats)

return  (
    <StatsContainer>
        <StatsParagraphName>{name}:</StatsParagraphName>
        <StatsParagraphStats stats={stats}>{stats}</StatsParagraphStats>
    </StatsContainer>)
}

export default CharacterStats