// PersonaAnalysis
interface PersonaUserChoice {
  question_id: number;
  choice_id: number;
}

interface PersonaQuestion {
  uid: number;
  contents: string;
  choice_items: ChoiceItem[];
  is_multi_choice: boolean;
}

interface ChoiceItem {
  uid: number;
  contents: string;
}
