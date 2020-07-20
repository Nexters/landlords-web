import React, { ReactElement } from 'react';
import * as S from './styled';

import Button from '../../components/Button';

type AnalysisResultProps = {};

export default function AnalysisResult({ }: AnalysisResultProps): ReactElement {
    return (
        <S.Container>
            <S.endButton>X</S.endButton>

            <S.personaTitle>예희님은 꼼꼼한 집순이!</S.personaTitle>

            <S.explanation>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut velit tortor, auctor semper ante scelerisque, rutrum luctus mi.
                Nullam pulvinar ante non lorem venenatis imperdiet.
                Mauris risus velit, mattis ut nulla in, porttitor posuere lorem.
                Ut at diam turpis. Fusce sit amet elit rhoncus erat dignissim hendrerit a vel sapien.
                Nam a metus quis velit vestibulum sagittis et a nisl.
                Morbi consectetur sit amet justo quis posuere.
                In tempor dui ut nibh molestie, non pharetra justo commodo.
            </S.explanation>

            <S.buttonExplanation>체크리스트로 더 현명하게 방을 구해보자!</S.buttonExplanation>

            <Button name='result' value='나만의 체크리스트 보러가기' link='/checklist' />
        </S.Container>
    );
}