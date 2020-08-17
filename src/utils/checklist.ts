import { CheckItem, CheckQuestion, StatusType } from 'entity/checklist';

export const setChecksByAnswers = (
  questions: CheckQuestion[],
  answers: CheckItem[],
): CheckQuestion[] => {
  const checkedQuestionIds = answers.map(({ uid }) => uid);
  return questions.map((question) => ({
    ...question,
    checks: question.checks.map((check) => ({
      ...check,
      checked: checkedQuestionIds.includes(check.uid),
    })),
  }));
};

export const extractQuestionsByLabel = (
  questions: CheckQuestion[],
): { [label: string]: CheckQuestion[] } =>
  questions.reduce((total: { [label: string]: CheckQuestion[] }, question) => {
    if (total.hasOwnProperty(question.label)) total[question.label].push(question);
    else total[question.label] = [question];
    return total;
  }, {});

export const filterQuestionsByStatus = (
  questions: CheckQuestion[],
  currentStatus: StatusType,
): CheckQuestion[] => questions.filter((question) => question.status === currentStatus);
