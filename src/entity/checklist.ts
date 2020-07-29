export interface CheckItem {
  type: string;
  label: string;
  description: string;
  value: boolean | { name: string; selected: boolean }[];
}

export interface CheckItemsByLabel {
  [label: string]: CheckItem[];
}

export interface RoomContent {
  name: string;
  cost?: string;
  location?: string;
  form?: string;
  size?: string;
  floor?: string;
  elevator?: string;
  expenses?: string;
  active: boolean;
  checklist: CheckItem[];
}
