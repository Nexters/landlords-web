import { CheckItem, CHECKLIST_STATUS, Question } from 'entity/checklist';

export const setChecksByAnswers = (questions: Question[], answers: CheckItem[]): Question[] => {
  const checkedQuestionIds = answers.map(({ uid }) => uid);
  return questions.map((question) => ({
    ...question,
    checks: question.checks.map((check) => ({
      ...check,
      checked: checkedQuestionIds.includes(check.uid),
    })),
  }));
};

export const extractQuestionsByLabel = (questions: Question[]): { [label: string]: Question[] } =>
  questions.reduce((total: { [label: string]: Question[] }, question) => {
    if (total.hasOwnProperty(question.label)) total[question.label].push(question);
    else total[question.label] = [question];
    return total;
  }, {});

export const filterQuestionsByStatus = (questions: Question[], currentStatus: string): Question[] =>
  questions.filter(
    (question) =>
      CHECKLIST_STATUS[question.status as keyof typeof CHECKLIST_STATUS] === currentStatus,
  );
