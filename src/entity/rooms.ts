export const ROOM_CONTENTS_LABEL = {
  price: '가격',
  address: '주소',
  buildingType: '주거형태',
  size: '공급면적',
  floor: '층/건물층수',
  elevator: '엘리베이터',
  admionistrationCost: '관리비',
};

export const BUILDING_TYPE_MATHCER = {
  OneRoom: '원룸',
  TwoRoom: '투룸',
  ThreeRoom: '쓰리룸',
  Officetel: '오피스텔',
  Apartment: '아파트',
  Villa: '빌라',
};

export const SELLING_TYPE_MATCHER = {
  MonthlyRent: '월세',
  Jeonse: '전세',
  Selling: '매매',
};

export interface Room {
  uid: string;
  deposit: number;
  monthly_rent: number;
  selling_type: keyof typeof SELLING_TYPE_MATCHER;
  address: string;
  title: string;
  description: string;
  image: string;
  building_type: keyof typeof BUILDING_TYPE_MATHCER;
  room_size: number;
  floor: string;
  has_elevator: boolean;
  administrative_expenses: number;
  user_id: number;
  name?: string;
  price?: string;
}

export interface ConvertedRoom {
  uid: string;
  name: string;
  price: string;
  address: string;
  buildingType: string;
  size: string;
  floor: string;
  elevator: string;
  admionistrationCost: string;
  imageUrl: string;
}
