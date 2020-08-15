export interface Question {
  uid: number;
  title: string;
  type_: string;
  label: string;
  state: string;
  category: string;
  checks: CheckItem[];
}

export interface CheckItem {
  uid: number;
  question_id: number;
  contents: string;
  checked?: boolean;
}
