import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    color: #000000;
`;

// Persona Analysis Page
const title = styled.h1`
    padding-top: 79px;
    font-size: 30px;
    font-weight: bold;
`;

const secondTitle = styled.h2`
    height = 81px;
    margin-top: 12px;
    font-size: 20px;
`;

const buttonExplanation = styled.p`
    position: absolute;
    left: 0;
    bottom: 139px;
    width: 100%;
    text-align: center;
    font-size: 16px;
`;

// Analysis Question Page
const backButton = styled.button`
    width: 24px;
    height: 24px;
    margin-top: 46px;
`;

const questionContainer = styled.div`
    display: grid;
    margin-top: 22px;
`;

const qeustionTitle = styled.h1`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    grid-column-start: 1;
    vertical-algin: bottom;
    font-size: 32px;
    font-weight: bold;
`;

const questionCounter = styled.p`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    grid-column-start: 2;
    font-size: 12px;
`;

const progress = styled.div`
    grid-column: 1 / 3;
    height: 5px;
    margin-top:12px;
    border-radius: 4px;
    background-color: #989898;
`;

const cardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 12px 12px;
    height: calc(100vh - 269px);
    padding: 39px 0 54px;
`;

// Analysis Result Page
const endButton = styled.button`
    width: 24px;
    height: 24px;
    margin-top: 46px;
`;

const personaTitle = styled.h1`
    margin-top: 9px;
    font-size: 30px;
    font-weight: bold;
`;

const explanation = styled.p`
    position: absolute;
    left: 0;
    bottom: 189px;
    padding: 0 20px;
    font-size: 14px;
`;



export {
  Container, title, secondTitle, buttonExplanation,
  backButton, questionContainer, qeustionTitle, questionCounter, progress, cardContainer,
  endButton, personaTitle, explanation
};
