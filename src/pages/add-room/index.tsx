import {
  Button,
  Header,
  Icon,
  Input,
} from 'components';
import React, { useState } from 'react';
import color from 'styles/color';

import * as S from './styled';


export default function AddRoom() {
  const [roomURL, setRoomURL] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomURL(e.target.value);
  };

  return (
    <>
      <Header title='자취방 추가하기'><Icon name='CANCEL' size='16px' /></Header>
      <S.Container>
        <S.InputContainer>
          <S.InputGuideText>직방/다방 URL 링크로 방을 불러올 수 있어요.</S.InputGuideText>
          <Input value={roomURL} onChange={handleInputChange} placeholder='URL 링크를 입력해 주세요' />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button title='방 정보 불러오기' bgColor={color.primaryYellow}/>
          <Button title='직접 입력하기' borderColor={color.grayscalef9}/>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
