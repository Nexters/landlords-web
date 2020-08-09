import { Button,Header } from 'components';
import React from 'react';
import color from 'styles/color';

import InputRow from './InputRow';
import * as S from './styled';

export default function Manual() {
  return (
    <>
      <Header 
        title='방 직접 입력하기'
        leftIconName='NAVIGATION_BACKWARD'
        leftIconSize='16'
      />
      <S.Container>
        <S.Image />
        <S.InputContainer>
          <InputRow label='방 제목' placeholder='600 / 50' onChange={() => {}}/>
          <InputRow label='주소' placeholder='600 / 50' onChange={() => {}}/>
          <InputRow label='주거형태' placeholder='600 / 50' onChange={() => {}}/>
          <InputRow label='전용면적' placeholder='600 / 50' onChange={() => {}} suffix='㎡'/>
          <InputRow label='층/건물층수' placeholder='600 / 50' onChange={() => {}} suffix='층'/>
          <InputRow label='엘리베이터' placeholder='600 / 50' onChange={() => {}} suffix='층'/>
          <InputRow label='관리비' placeholder='600 / 50' onChange={() => {}} suffix='만원'/>
        </S.InputContainer>
        <S.ButtonContainer>
          <Button title='방 추가하기' bgColor={color.primaryYellow}/>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
