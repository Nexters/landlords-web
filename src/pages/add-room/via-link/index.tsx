import api from 'api/request';
import { useOAuth } from 'api/useOAuth';
import {
  Button,
  Header,
  Icon,
  Input,
} from 'components';
import { Room } from 'entity/rooms';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomAction } from 'store/roomSlice';
import color from 'styles/color';
import { convertRoomForDisplay } from 'utils/room';

import * as S from './styled';

export default function AddRoomViaLink() {
  const [roomURL, setRoomURL] = useState('');
  const { user } = useOAuth();
  console.log('user', user);
  const token = sessionStorage.getItem('accessToken');
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomURL(e.target.value);
  };
  const dispatch = useDispatch();

  const handleClick = async () => {
    let target = roomURL.replace(/[^0-9]/g, '');
    const suffix = '?crawling_target=Zigbang';
    try {
      const { data, error } = await api.put<Room>('rooms/' + target + suffix, {}, {
        headers: { Authorization: token },
      });
      if(error) throw new Error('Failed');
      const { setRoom } = roomAction;
      // add-room으로 이동

      dispatch(setRoom(convertRoomForDisplay(data)));
      history.push('/add-room');
    } catch {
      alert('다시 시도해 주세요');
    }
  };

  return (
    <>
      <Header title='자취방 추가하기'>
        <Icon name='CANCEL_DARK' size='16' onClick={() => {history.push('/');}}/>
      </Header>
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
