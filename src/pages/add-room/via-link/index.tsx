import request from 'api/request';
import { Button, Header, Icon, Input } from 'components';
import { Room } from 'entity/rooms';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction } from 'store/roomsSlice';
import color from 'styles/color';
import url from 'url';

import * as S from './styled';

export default function AddRoomViaLink() {
  const [roomURL, setRoomURL] = useState('');
  const { addRoom } = roomsAction;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRoomLoadClick = async () => {
    const roomId = roomURL.split('/').pop()?.split('?')[0];
    const host = url.parse(roomURL).host;
    let crawlingTarget = '';
    if (host?.includes('zigbang')) crawlingTarget = 'Zigbang';
    if (host?.includes('dabang')) crawlingTarget = 'Dabang';
    const suffix = `?crawling_target=${crawlingTarget}`;
    const { data, error } = await request.put<Room>('/rooms/' + roomId + suffix);
    if (error) alert('방 정보 불러오기 실패');
    else {
      dispatch(addRoom(data));
      history.push('/rooms');
    }
  };

  return (
    <>
      <Header title='자취방 추가하기'>
        <Icon name='CANCEL_DARK' size='16' onClick={() => history.push('/rooms')} />
      </Header>
      <S.Container>
        <S.InputContainer>
          <S.InputGuideText>직방/다방 URL 링크로 방을 불러올 수 있어요.</S.InputGuideText>
          <Input
            value={roomURL}
            onChange={(e) => setRoomURL(e.target.value)}
            placeholder='URL 링크를 입력해 주세요'
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button
            title='방 정보 불러오기'
            bgColor={color.primaryYellow}
            onClick={handleRoomLoadClick}
          />
          <Button
            title='직접 입력하기'
            borderColor={color.grayscalef9}
            onClick={() => history.push('/add-room')}
          />
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
