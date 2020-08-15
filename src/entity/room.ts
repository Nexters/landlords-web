export interface Room {
  address: string;
  administrative_expenses: number;
  building_type: string;
  deposit: number;
  description: string;
  floor: string;
  has_elevator: boolean | null;
  image: string;
  monthly_rent: number;
  room_size: number;
  selling_type: string;
  title: string;
  uid: string;
  user_id: number;
}
