import request from 'api/request';
import { Button, Header } from 'components';
import {
  BUILDING_TYPE_MATHCER,
  BuildingType,
  Room,
  ROOM_CONTENTS_LABEL,
  SellingType,
} from 'entity/rooms';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction, roomsSelector } from 'store/roomsSlice';
import color from 'styles/color';
import { getRoomPrice } from 'utils/room';

import InputRow from './InputRow';
import * as S from './styled';

const initialRoom = {
  uid: '',
  deposit: 0,
  monthly_rent: 0,
  selling_type: 'MonthlyRent' as SellingType,
  address: '',
  title: '',
  description: '',
  image: '',
  building_type: 'OneRoom' as BuildingType,
  room_size: 0,
  floor: '',
  has_elevator: null,
  administrative_expenses: 0,
  user_id: 0,
  name: '',
};

export default function AddRoom() {
  const [room, setRoom] = useState<Room>(initialRoom);
  const { fetchedRoom } = useSelector(roomsSelector);
  const { addRoom } = roomsAction;
  const dispatch = useDispatch();
  const history = useHistory();
  console.log('process.env', process.env);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const { error } = await request.patch(`/rooms/${room.uid}`, room);
    if (error) alert('방 등록에 실패했습니다.');
    else {
      dispatch(addRoom(room));
      history.push('/rooms');
    }
  };

  const getButtonStyleProps = (hasElevator: boolean | null) => {
    const base = { height: '32px', fontSize: '14px' };
    return hasElevator
      ? { ...base, bgColor: color.primaryDullPurple, textColor: color.basicWhite }
      : base;
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [deposit, monthly_rent] = e.target.value.split('/');
    setRoom({
      ...room,
      deposit: +deposit,
      monthly_rent: +monthly_rent,
    });
  };

  useEffect(() => {
    if (fetchedRoom.uid) setRoom(fetchedRoom);
  }, []);

  return (
    <>
      <Header
        title='방 직접 입력하기'
        leftIconName='NAVIGATION_BACKWARD'
        leftIconSize='16'
        onClick={() => history.push('/add-room/via-link')}
      />
      <S.Container>
        <S.Image src={room.image} />
        <S.InputContainer>
          <InputRow
            value={getRoomPrice(room)}
            name='name'
            label='방 제목'
            placeholder='월세 600/50'
            onChange={handleInput}
          />
          <InputRow
            value={`${room.deposit}/${room.monthly_rent}`}
            name='price'
            label={ROOM_CONTENTS_LABEL.price}
            placeholder='600/50'
            onChange={handlePriceChange}
          />
          <InputRow
            value={room.address}
            name='address'
            label={ROOM_CONTENTS_LABEL.address}
            placeholder='서울특별시 관악구 신림동'
            onChange={handleInput}
          />
          <InputRow
            value={BUILDING_TYPE_MATHCER[room.building_type]}
            name='building_type'
            label={ROOM_CONTENTS_LABEL.buildingType}
            placeholder={Object.values(BUILDING_TYPE_MATHCER).join('/')}
            onChange={handleInput}
          />
          <InputRow
            value={`${room.room_size}`}
            name='room_size'
            label={ROOM_CONTENTS_LABEL.size}
            placeholder='8'
            onChange={handleInput}
            suffix='평'
          />
          <InputRow
            value={room.floor}
            name='floor'
            label={ROOM_CONTENTS_LABEL.floor}
            placeholder='3/8'
            onChange={handleInput}
            suffix='층'
          />
          <S.Row>
            <S.Label>엘리베이터</S.Label>
            <Button
              title='있음'
              {...getButtonStyleProps(room.has_elevator)}
              onClick={() => setRoom({ ...room, has_elevator: true })}
            />
            <Button
              title='없음'
              {...getButtonStyleProps(!room.has_elevator)}
              onClick={() => setRoom({ ...room, has_elevator: false })}
            />
          </S.Row>
          <InputRow
            value={`${room.administrative_expenses}`}
            name='administrative_expenses'
            label={ROOM_CONTENTS_LABEL.administrationCost}
            placeholder='5'
            onChange={handleInput}
            suffix='만원'
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button title='방 추가하기' bgColor={color.primaryYellow} onClick={handleSubmit} />
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
