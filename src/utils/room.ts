import { BUILDING_TYPE_MATHCER, ConvertedRoom, Room, SELLING_TYPE_MATCHER } from 'entity/rooms';

export const getRoomPrice = ({ selling_type, monthly_rent, deposit }: Room) => {
  const sellingExpression = SELLING_TYPE_MATCHER[selling_type];
  return selling_type !== 'MonthlyRent'
    ? `${sellingExpression} ${deposit}`
    : `${sellingExpression} ${deposit}/${monthly_rent}`;
};

const getElevatorStatus = (hasElevator?: boolean | null): string =>
  hasElevator === null ? '' : hasElevator ? '있음' : '없음';

export const createRoomMap = (rooms: ConvertedRoom[]) =>
  rooms.reduce((total: { [id: string]: ConvertedRoom }, room) => {
    total[room.uid] = room;
    return total;
  }, {});

export const convertRoomForDisplay = (room: Room): ConvertedRoom => {
  const price = getRoomPrice(room);
  return {
    uid: room.uid || '',
    name: room.name || price,
    price,
    address: room.address,
    buildingType: BUILDING_TYPE_MATHCER[room.building_type],
    size: `${Math.round(room.room_size / 3.33)} 평`,
    floor: room.floor.replace('/', ' / '),
    elevator: getElevatorStatus(room.has_elevator),
    administrationCost: `${room.administrative_expenses} 만 원`,
    imageUrl: room.image,
  };
};
