import styled from 'styled-components';

export const StyledDisplay = styled.div`
box-sizing: border-box;
dislay: flex; 
alight-items: center;
margin: 0 0 30px 0;
padding: 10px;
border: 4px solid #333;
min-height: 30px;
width: 100%;
border-radius: 10px; 
color: ${props => (props.gameOver ? 'red' : '#999')};
background: #000;
font-family: 'Titillium Web', sans-serif;
font-size: 0.8rem;
`