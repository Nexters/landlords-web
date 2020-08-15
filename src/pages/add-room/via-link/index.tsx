import api from 'api';
import { useOAuth } from 'api/useOAuth';
import {
  Button,
  Header,
  Icon,
  Input,
} from 'components';
import React, { useState } from 'react';
import color from 'styles/color';

import * as S from './styled';


export default function AddRoomViaLink() {
  const [roomURL, setRoomURL] = useState('');
  const { user } = useOAuth();
  console.log('user', user);
  const token = sessionStorage.getItem('accessToken');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomURL(e.target.value);
  };

  const handleClick = async () => {
    console.log(roomURL);
    let target = roomURL.replace(/[^0-9]/g, '');
    const suffix = '?crawling_target=Zigbang';
    console.log(target + suffix);
    const res = await api.put('rooms/' + target + suffix, {}, {
      headers: { Authorization: token },
    });
    console.log(res);

    // add-room으로 이동
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
          <Button title='방 정보 불러오기' bgColor={color.primaryYellow} onClick={handleClick}/>
          <Button title='직접 입력하기' borderColor={color.grayscalef9}/>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
