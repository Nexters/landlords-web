import { CheckLayout, Icon, RoomCard, SelectLayout } from 'components';
import { CheckItem, ItemsByLabel, RoomContent, SelectItem } from 'entity/checklist';
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

import mock from './ChecklistPage.mock';
import * as S from './styled';

const CONTENT_LABEL = {
  location: '주소',
  form: '주거형태',
  size: '전용면적',
  floor: '층/건물층수',
  elevator: '엘리베이터',
  expenses: '관리비',
};

type ContentLabelType = keyof typeof CONTENT_LABEL;

const extractItemsByLabel = <T extends CheckItem | SelectItem>(items: T[], targetType: string) =>
  items
    .filter((item) => item.type === targetType)
    .reduce((total: ItemsByLabel, item: T) => {
      if (total.hasOwnProperty(item.label)) total[item.label].push(item);
      else total[item.label] = [item];
      return total;
    }, {});

export default function ChecklistPage(): ReactElement {
  const history = useHistory();
  const [rooms, setRooms] = useState<RoomContent[]>(mock);
  const activeRoom = rooms.filter((room) => room.active)[0];
  const checkItems = extractItemsByLabel(activeRoom.checklist, 'check');
  const selectItems = extractItemsByLabel(activeRoom.checklist, 'select');

  const handleRoomSelect = (index: number) => () => {
    const nextRooms = rooms.map((room) => {
      room.active = false;
      return room;
    });
    nextRooms[index].active = true;
    setRooms(nextRooms);
  };

  const handleCheckboxClick = (itemsByLabel: ItemsByLabel, label: string) => (index: number) => {
    const nextRooms = rooms.slice();
    const roomIndex = nextRooms.findIndex((room) => room.active);
    nextRooms[roomIndex].checklist
      .filter((item) => item.description === itemsByLabel[label][index].description)
      .map((item) => {
        item.value = !item.value;
        return item;
      });
    setRooms(nextRooms);
  };

  return rooms.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <S.Container>
      <S.CategoryHeader>
        <div>
          <S.BackButton>
            <Icon name='NAVIGATION_BACKWARD' size='16' />
          </S.BackButton>
          <S.CategoryTitle>자취방 체크리스트</S.CategoryTitle>
        </div>
      </S.CategoryHeader>
      <S.ComparisonLayer>
        <span>체크한 방을 비교해보세요.</span>
        <S.ComparisonButton onClick={() => history.push('/')}>비교하기</S.ComparisonButton>
      </S.ComparisonLayer>
      <S.RoomCardList>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} onClick={handleRoomSelect(index)} />
        ))}
        <RoomCard isEmpty={true} />
      </S.RoomCardList>
      <S.RoomContentWrapper>
        <S.RoomContent>
          <S.RoomDetail>
            <S.RoomDetailTitle>{activeRoom.cost}</S.RoomDetailTitle>
            {Object.keys(CONTENT_LABEL).map((key) => (
              <S.RoomDetailRow key={key}>
                <span>{CONTENT_LABEL[key as ContentLabelType]}</span>
                <span>{activeRoom[key as ContentLabelType]}</span>
              </S.RoomDetailRow>
            ))}
          </S.RoomDetail>
          {Object.keys(checkItems).map((label, index) => (
            <CheckLayout
              key={index}
              label={label}
              items={checkItems[label] as CheckItem[]}
              onClick={handleCheckboxClick(checkItems, label)}
            />
          ))}
          {Object.keys(selectItems).map((label, index) => (
            <SelectLayout key={index} label={label} items={selectItems[label] as SelectItem[]} />
          ))}
          <S.DeleteButton>방 삭제하기</S.DeleteButton>
        </S.RoomContent>
      </S.RoomContentWrapper>
    </S.Container>
  );
}
