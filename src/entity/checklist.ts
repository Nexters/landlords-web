interface BaseItem {
  type: string;
  label: string;
  description: string;
}

export interface CheckItem extends BaseItem {
  value: boolean;
}

export interface SelectItem extends BaseItem {
  value: { name: string; selected: boolean }[];
}

export interface ItemsByLabel {
  [label: string]: (CheckItem | SelectItem)[];
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
  checklist: (CheckItem | SelectItem)[];
}
