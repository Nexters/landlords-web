import React, { ReactElement } from 'react';
import * as S from './styled';

import Button from '../../components/Button';
import Card from '../../components/Card';

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
                <Card title='핵인싸' subTitle='일주일에 4번 이상 약속있는' />
                <Card title='핵인싸' subTitle='일주일에 4번 이상 약속있는' />
                <Card title='핵인싸' subTitle='일주일에 4번 이상 약속있는' />
                <Card title='핵인싸' subTitle='일주일에 4번 이상 약속있는' />
            </S.cardContainer>

            <Button name='next' value='다음' link='/persona/result' />
        </S.Container>
    );
}