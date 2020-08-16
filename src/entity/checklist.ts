export const CHECKLIST_STATUS = {
  Looking: '방보는중',
  Contracting: '방계약전',
  Moving: '이사중',
};

export interface Question {
  uid: number;
  title: string;
  type_: string;
  label: string;
  status: string;
  category: string;
  checks: CheckItem[];
}

export interface CheckItem {
  uid: number;
  question_id: number;
  contents: string;
  checked?: boolean;
}
