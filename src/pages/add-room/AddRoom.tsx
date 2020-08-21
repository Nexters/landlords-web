import request from 'api/request';
import { Button, Header } from 'components';
import {
  BUILDING_TYPE_MATHCER,
  BuildingType,
  Room,
  ROOM_CONTENTS_LABEL,
  SELLING_TYPE_MATCHER,
  SellingType,
} from 'entity/rooms';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction } from 'store/roomsSlice';
import color from 'styles/color';

import InputRow from './InputRow';
import * as S from './styled';

const initialRoom = {
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
  const [price, setPrice] = useState('');
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
    const updatedRoom = setDepositAndMonthlyRent(room);
    const { error } = await request.post('/rooms', updatedRoom);
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

  const setDepositAndMonthlyRent = (room: Room) => {
    const [deposit, monthly_rent] = price.split('/');
    return {
      ...room,
      deposit: +deposit || 0,
      monthly_rent: +monthly_rent || 0,
    };
  };

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
            value={room.name}
            name='name'
            label='방 제목'
            placeholder='월세 600/50'
            onChange={handleInput}
          />
          <S.Row>
            <S.Label></S.Label>
            <S.BuildingTypeButtonsGrid>
              {Object.keys(SELLING_TYPE_MATCHER).map((key) => (
                <S.SelectableButton
                  name={key}
                  key={key}
                  onClick={() => setRoom({ ...room, selling_type: key as SellingType })}
                  selected={key === room.selling_type}>
                  {SELLING_TYPE_MATCHER[key as SellingType]}
                </S.SelectableButton>
              ))}
            </S.BuildingTypeButtonsGrid>
          </S.Row>
          <InputRow
            value={price}
            name='price'
            label={ROOM_CONTENTS_LABEL.price}
            placeholder='600/50'
            onChange={(e) => setPrice(e.target.value)}
          />
          <InputRow
            value={room.address}
            name='address'
            label={ROOM_CONTENTS_LABEL.address}
            placeholder='서울특별시 관악구 신림동'
            onChange={handleInput}
          />
          <S.GridButtonRow>
            <S.Label>{ROOM_CONTENTS_LABEL.buildingType}</S.Label>
            <S.BuildingTypeButtonsGrid>
              {Object.keys(BUILDING_TYPE_MATHCER).map((key) => (
                <S.SelectableButton
                  name={key}
                  key={key}
                  onClick={() => setRoom({ ...room, building_type: key as BuildingType })}
                  selected={key === room.building_type}>
                  {BUILDING_TYPE_MATHCER[key as BuildingType]}
                </S.SelectableButton>
              ))}
            </S.BuildingTypeButtonsGrid>
          </S.GridButtonRow>
          <InputRow
            type='number'
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
            <S.Label>{ROOM_CONTENTS_LABEL.elevator}</S.Label>
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
            type='number'
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
