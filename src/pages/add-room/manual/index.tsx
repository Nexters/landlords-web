import { Button,Header } from 'components';
import React, { useState } from 'react';
import color from 'styles/color';

import InputRow from './InputRow';
import * as S from './styled';

enum INPUT_NAME {
  NAME = 'name',
  ADDRESS = 'address',
  TYPE = 'type',
  FLOOR_AREA = 'floor_area',
  NUMBER_OF_FLOORS = 'number_of_floors',
  MAINTENANCE = 'maintenance',
}

const INITIAL_STATE = {
  [INPUT_NAME.NAME]: '',
  [INPUT_NAME.ADDRESS]: '',
  [INPUT_NAME.TYPE]: '',
  [INPUT_NAME.FLOOR_AREA]: '',
  [INPUT_NAME.NUMBER_OF_FLOORS]: '',
  [INPUT_NAME.MAINTENANCE]: '',
};

export default function Manual() {
  const [hasElevator, setHasElevator] = useState(true);
  const [state, setState] = useState(INITIAL_STATE);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const getButtonStyleProps = (active: boolean) => {
    return active
      ? {
        title: '있음',
        height: '32px',
        fontSize: '14px',
        bgColor: color.primaryDullPurple,
        textColor: color.basicWhite,
      }
      : 
      {
        title: '없음',
        height: '32px',
        fontSize: '14px',
      };
  };
  
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
            value={state[INPUT_NAME.TYPE]}
            name={INPUT_NAME.TYPE}
            label='주거형태'
            placeholder='원룸(주방 분리형(1.5룸))'
            onChange={handleInput}
          />
          <InputRow
            type='number'
            value={state[INPUT_NAME.FLOOR_AREA]}
            name={INPUT_NAME.FLOOR_AREA}
            label='전용면적'
            placeholder='26.14'
            onChange={handleInput}
            suffix='㎡'
          />
          <InputRow
            type='number'
            value={state[INPUT_NAME.NUMBER_OF_FLOORS]}
            name={INPUT_NAME.NUMBER_OF_FLOORS}
            label='층/건물층수'
            placeholder='ex) 3/8'
            onChange={handleInput}
            suffix='층'
          />
          <S.Row>
            <S.Label>엘리베이터</S.Label>
            <Button {...getButtonStyleProps(hasElevator)} onClick={() => setHasElevator(true)}/>
            <Button {...getButtonStyleProps(!hasElevator)} onClick={() => setHasElevator(false)}/>
          </S.Row>
          <InputRow
            type='number'
            value={state[INPUT_NAME.MAINTENANCE]}
            name={INPUT_NAME.MAINTENANCE}
            label='관리비'
            placeholder='ex) 5'
            onChange={handleInput}
            suffix='만원'
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button title='방 추가하기' bgColor={color.primaryYellow}/>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
