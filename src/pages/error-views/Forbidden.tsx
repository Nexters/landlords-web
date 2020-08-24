import React from 'react';

import * as S from './styled';

export default function Forbidden() {
  return (
    <S.Container>
      <S.StatusCodeWrapper>
        <S.StatusCodeText>403</S.StatusCodeText>
        <S.StatusCodeSubText>disallowed_useragent</S.StatusCodeSubText>
      </S.StatusCodeWrapper>
      <S.Image src='resources/error@3x.png' />
      <S.BottomTextWrapper>
        <S.BottomTitle>승인 오류</S.BottomTitle>
        <S.BottomSubtitle>사파리나 크롬 앱에서 사용해 주세요</S.BottomSubtitle>
      </S.BottomTextWrapper>
    </S.Container>
  );
}
