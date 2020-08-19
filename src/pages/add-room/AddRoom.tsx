import api from 'api/request';
import { Button,Header } from 'components';
import React, { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomSelector } from 'store/roomSlice';
import color from 'styles/color';
import { convertRoomForBackend } from 'utils/room';

import InputRow from './InputRow';
import * as S from './styled';

enum INPUT_NAME {
  NAME = 'name',
  ADDRESS = 'address',
  BUILDING_TYPE = 'buildingType',
  ROOM_SIZE = 'size',
  NUMBER_OF_FLOORS = 'floor',
  MAINTENANCE = 'administrationCost',
}

const INITIAL_STATE = {
  [INPUT_NAME.NAME]: '',
  [INPUT_NAME.ADDRESS]: '',
  [INPUT_NAME.BUILDING_TYPE]: '',
  [INPUT_NAME.ROOM_SIZE]: '',
  [INPUT_NAME.NUMBER_OF_FLOORS]: '',
  [INPUT_NAME.MAINTENANCE]: '',
  elevator: '없음',
  imageUrl: '',
};

export default function AddRoom(props: any) {
  const [state, setState] = useState(INITIAL_STATE);
  const { room } = useSelector(roomSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log('process.env', process.env);

  useEffect(() => {
    if (room) {
      const {
        name,
        address,
        buildingType,
        size,
        floor,
        elevator,
        administrationCost,
        imageUrl,
      } = room;
  
      setState({
        name,
        address,
        administrationCost,
        size,
        buildingType,
        floor,
        imageUrl,
        elevator,
      });
    }
  }, []);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const {
      name,
      address,
      buildingType,
      floor,
      size,
    } = state;
    if(name && address && size && buildingType && floor) {
      const req = convertRoomForBackend({ ...state, ...room });
      try {
        const { error } = await api.post('/rooms', req, {
          headers: {
            Authorization: sessionStorage.getItem('accessToken'),
          },
        });
        if (error) throw new Error('Unable to register');
        alert('성공');
      } catch {
        alert('방 등록에 실패했습니다. 다시 시도해 주세요');
      } finally {
        history.push('/');
      }
    }
  };

  const getButtonStyleProps = (active: boolean) => {
    return active
      ? {
        height: '32px',
        fontSize: '14px',
        bgColor: color.primaryDullPurple,
        textColor: color.basicWhite,
      }
      : {
        height: '32px',
        fontSize: '14px',
      };
  };

  const hasElevator = state.elevator === '있음';
  
  return (
    <>
      <Header 
        title='방 직접 입력하기'
        leftIconName='NAVIGATION_BACKWARD'
        leftIconSize='16'
      />
      <S.Container>
        <S.Image src={state.imageUrl} />
        <S.InputContainer>
          <InputRow
            value={state[INPUT_NAME.NAME]}
            name={INPUT_NAME.NAME}
            label='방 제목'
            placeholder='600 / 50'
            onChange={handleInput}
          />
          <InputRow
            value={state[INPUT_NAME.ADDRESS]}
            name={INPUT_NAME.ADDRESS}
            label='주소'
            placeholder='서울특별시 관악구 신림동'
            onChange={handleInput}
          />
          <InputRow
            value={state[INPUT_NAME.BUILDING_TYPE]}
            name={INPUT_NAME.BUILDING_TYPE}
            label='주거형태'
            placeholder='원룸(주방 분리형(1.5룸))'
            onChange={handleInput}
          />
          <InputRow
            value={state[INPUT_NAME.ROOM_SIZE]}
            name={INPUT_NAME.ROOM_SIZE}
            label='평형정보'
            placeholder='26.14'
            onChange={handleInput}
            suffix='평'
          />
          <InputRow
            value={state[INPUT_NAME.NUMBER_OF_FLOORS]}
            name={INPUT_NAME.NUMBER_OF_FLOORS}
            label='층/건물층수'
            placeholder='ex) 3/8'
            onChange={handleInput}
            suffix='층'
          />
          <S.Row>
            <S.Label>엘리베이터</S.Label>
            <Button
              title="있음"
              {...getButtonStyleProps(hasElevator)} 
              onClick={() => setState({ ...state, elevator: '있음' })}
            />
            <Button
              title='없음'
              {...getButtonStyleProps(!hasElevator)} 
              onClick={() => setState({ ...state, elevator: '없음' })}
            />
          </S.Row>
          <InputRow
            value={state[INPUT_NAME.MAINTENANCE]}
            name={INPUT_NAME.MAINTENANCE}
            label='관리비'
            placeholder='ex) 5'
            onChange={handleInput}
            suffix='만원'
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button
            title='방 추가하기' bgColor={color.primaryYellow}
            onClick={handleSubmit}
          />
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
