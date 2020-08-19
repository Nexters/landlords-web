import { ConvertedRoom, Room, SELLING_TYPE } from 'entity/rooms';
import { BUILDING_TYPE_MATHCER, SELLING_TYPE_MATCHER } from 'entity/rooms';

const getRoomPrice = ({ selling_type, monthly_rent, deposit }: Room) => {
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
    uid: room.uid,
    name: price,
    price,
    address: room.address,
    buildingType: BUILDING_TYPE_MATHCER[room.building_type],
    size: Math.round(room.room_size / 3.33).toString(),
    floor: room.floor.replace('/', ' / '),
    elevator: getElevatorStatus(room.has_elevator),
    administrationCost: room.administrative_expenses.toString(),
    imageUrl: room.image,
  };
};

export const convertRoomForBackend = (room: ConvertedRoom): Partial<Room> => {
  const {
    name,
    address,
    buildingType, // 디자인 확정 후 도입예정
    floor,
    elevator,
    administrationCost,
    imageUrl,
    size,
  } = room;
  const [depositstring, monthlyRentString, ...etc] = name
    .split('/')
    .map((str) => str.replace(/[^0-9]/g, ''));

  const deposit = parseInt(depositstring ?? 0);
  const monthly_rent = parseInt(monthlyRentString ?? 0);

  const getSellingTypeFromPrice = () =>
    monthly_rent ? SELLING_TYPE.MONTHLY_RENT : SELLING_TYPE.JEONSE;

  return {
    deposit,
    monthly_rent,
    selling_type: getSellingTypeFromPrice(),
    address,
    title: name,
    description: '',
    image: imageUrl,
    building_type: 'OneRoom', //TODO: 디자인 확정되면 셀렉터로 대응
    room_size: Math.round(parseInt(size) * 3.3),
    floor,
    has_elevator: elevator === '있음',
    administrative_expenses: parseInt(administrationCost) ?? 0,
  };
};
