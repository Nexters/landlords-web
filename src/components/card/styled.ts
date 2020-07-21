import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: solid 1px #979797;
    color: #000000;
`;

const title = styled.h1`
    width: calc(100% - 24px);
    height: 30px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;

const subTitle = styled.h2`
    width: calc(100% - 24px);
    height: 18px;
    margin-bottom: 1px;
    font-size: 12px;
`;


export { Container, title, subTitle };
