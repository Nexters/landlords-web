interface BaseItem {
  type: string;
  label: string;
  description: string;
}

export interface SimpleCheckItem {
  name: string;
  checked: boolean;
}

export interface CheckItem extends BaseItem {
  value: boolean;
}

export interface SelectItem extends BaseItem {
  value: SimpleCheckItem[];
}

export interface ItemsByLabel {
  [label: string]: (CheckItem | SelectItem)[];
}

export interface Room {
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
