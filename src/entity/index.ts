// PersonaAnalysis
export interface PersonaUserChoice {
  user_id: number;
  question_id: number;
  choice_id: number;
}

export interface PersonaQuestion {
  uid: number;
  contents: string;
  choice_items: ChoiceItem[];
  is_multi_choice: boolean;
}

interface ChoiceItem {
  uid: number;
  contents: string;
}
