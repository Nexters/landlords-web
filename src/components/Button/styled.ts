import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    height: 53px;
    margin: 12px 20px 74px;
    border: none;
    border-radius: 4px;
    background-color: #d8d8d8;
    font-size: 22px;
    color: #000000;
`;

export { Container, Input };
