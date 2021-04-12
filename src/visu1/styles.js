import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #fafafa;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    height: 10%;
    width: 100%;
    background-color: lightblue;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

`;

const Title = styled.div`
    height: 5%;
    width: 100%;
    background-color: inherit;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

`;

const Map = styled.div`
    height: 85%;
    width: 100%;
    background-color: inherit;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    height: 100%;
    border: none;
    border: 1px solid blue;
    background-color: white;
    :hover{
        background-color: inherit;
        
    }
    margin: 3px;
    padding: 3px;

`;

export {Container, Header, Title, Map, Button}