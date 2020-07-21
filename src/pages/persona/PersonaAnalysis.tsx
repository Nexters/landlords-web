import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';



type PersonaAnalysisPageProps = {};

export default function PersonaAnalysisPage({ }: PersonaAnalysisPageProps): ReactElement {
  return (
    <S.Container>
      <div>
        <h1>당신만을 위한 자취방 체크리스트를 만들어드릴게요!</h1>
        <h2>방 구하기부터 이사까지, 그누구도 알려주지 않은 맞춤형 꿀팁</h2>

        <p>총 10,000명이 체크해방을 참고했습니다.</p>

        <Link to='/persona/question'>
          <button>자취 준비 시작</button>
        </Link>

      </div>
    </S.Container>
  );
}
