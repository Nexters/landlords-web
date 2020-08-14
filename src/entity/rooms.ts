export interface Room {
  uid: string;
  deposit: number;
  monthly_rent: number;
  selling_type: number;
  address: string;
  title: string;
  description: string;
  image: string;
  building_type: number;
  room_size: number;
  floor: string;
  has_elevator: boolean;
  administrative_expenses: number;
  user_id: number;
  name?: string;
  price?: string;
}
