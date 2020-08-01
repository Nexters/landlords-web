import { Room } from 'entity/checklist';

const rooms: Room[] = [
  {
    name: '1번째 방이름',
    cost: '월세 500/55',
    location: '서울특별시 관악구 봉천동',
    form: '원룸(주방 분리형(1.5룸))',
    size: '26.4㎡',
    floor: '3층 / 5층',
    elevator: '있음',
    expenses: '5만 원',
    active: true,
    checklist: [
      { type: 'check', label: '건물/방 상태', description: '연식이 5년 이하인가요?', value: true },
      {
        type: 'check',
        label: '건물/방 상태',
        description: '벽 모퉁이에 곰팡이가 없나요?',
        value: true,
      },
      {
        type: 'check',
        label: '옵션',
        description: '옵션의 상태, 파손은 없었나요?',
        value: true,
      },
      {
        type: 'check',
        label: '옵션',
        description: '도배를 새로 해주나요?',
        value: true,
      },
      {
        type: 'select',
        label: '방 정보',
        description: '관리비 포함 내역',
        value: [
          { name: '가스', checked: true },
          { name: '전기', checked: false },
          { name: '수도', checked: true },
          { name: '청소', checked: false },
          { name: '인터넷', checked: true },
          { name: 'TV', checked: false },
        ],
      },
    ],
  },
  {
    name: '2번째 방이름',
    cost: '월세 1000/65',
    location: '경기도 분당구 서현동',
    form: '원룸(주방 분리형(1.5룸))',
    size: '26.4㎡',
    floor: '3층 / 5층',
    elevator: '있음',
    expenses: '5만 원',
    active: false,
    checklist: [
      { type: 'check', label: '건물/방 상태', description: '연식이 5년 이하인가요?', value: false },
      {
        type: 'check',
        label: '옵션',
        description: '벽 모퉁이에 곰팡이가 없나요?',
        value: false,
      },
      {
        type: 'check',
        label: '옵션',
        description: '옵션의 상태, 파손은 없었나요?',
        value: false,
      },
      {
        type: 'check',
        label: '옵션',
        description: '도배를 새로 해주나요?',
        value: false,
      },
      {
        type: 'select',
        label: '방 정보',
        description: '관리비 포함 내역',
        value: [
          { name: '가스', checked: true },
          { name: '전기', checked: true },
          { name: '수도', checked: true },
          { name: '청소', checked: true },
          { name: '인터넷', checked: true },
          { name: 'TV', checked: true },
        ],
      },
    ],
  },
];

export default rooms;
