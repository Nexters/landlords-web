const quesitons = [
  {
    uid: 1,
    type_: 0,
    title: '당신의 성별은?',
    choices: [
      {
        uid: 1,
        question_id: 1,
        contents: '남자',
        category: 0,
      },
      {
        uid: 2,
        question_id: 2,
        contents: '여자',
        category: 1,
      },
    ],
  },
  {
    uid: 3,
    type_: 0,
    title: '당신은 아침형? 야행성?',
    choices: [
      {
        uid: 1,
        question_id: 1,
        contents: '아침형',
        category: 0,
      },
      {
        uid: 2,
        question_id: 2,
        contents: '야행성',
        category: 1,
      },
    ],
  },
  {
    uid: 2,
    type_: 1,
    title: '어떤 반려동물을 키우시나요?',
    choices: [
      {
        uid: 3,
        question_id: 1,
        contents: '개',
        category: 0,
      },
      {
        uid: 4,
        question_id: 2,
        contents: '새',
        category: 1,
      },
      {
        uid: 5,
        question_id: 3,
        contents: '고양이',
        category: 3,
      },
      {
        uid: 6,
        question_id: 4,
        contents: '물고기',
        category: 4,
      },
    ],
  },
];

export default quesitons;
