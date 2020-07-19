import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    color: #000000;
`;

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

const viewCounter = styled.p`
    position: absolute;
    left: 0;
    bottom: 139px;
    width: 100%;
    text-align: center;
    font-size: 16px;
`;

export { Container, title, secondTitle, viewCounter };
