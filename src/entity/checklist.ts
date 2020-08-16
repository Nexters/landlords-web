export const STATUS_MATCHER = {
  Looking: '방보는중',
  Contracting: '방계약전',
  Moving: '이사중',
};

export type StatusType = keyof typeof STATUS_MATCHER;
export type QuestionType = 'SingleChoice' | 'MultipleChoice';
export type CategoryType = 'Normal' | 'Welfare' | 'Transportation' | 'Economical';

export interface Question {
  uid: number;
  title: string;
  type_: QuestionType;
  label: string;
  status: keyof typeof STATUS_MATCHER;
  category: CategoryType;
  checks: CheckItem[];
}

export interface CheckItem {
  uid: number;
  question_id: number;
  contents: string;
  checked?: boolean;
}
