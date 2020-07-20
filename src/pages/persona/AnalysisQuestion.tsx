import React, { ReactElement } from 'react';
import * as S from './styled';

import Button from '../../components/Button';

type AnalysisQuestionProps = {};

export default function AnalysisQuestion({ }: AnalysisQuestionProps): ReactElement {
    return (
        <S.Container>
            <S.backButton>back</S.backButton>

            <S.questionContainer>
                <S.qeustionTitle>Question?</S.qeustionTitle>
                <S.questionCounter>1/10</S.questionCounter>
                <S.progress />
            </S.questionContainer>


            <S.cardContainer>
                <a>card1</a>
                <a>card2</a>
            </S.cardContainer>

            <Button name='next' value='다음' link='/persona/result' />
        </S.Container>
    );
}