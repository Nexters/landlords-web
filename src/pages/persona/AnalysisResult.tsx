import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

type AnalysisResultProps = {};

export default function AnalysisResult({ }: AnalysisResultProps): ReactElement {
    return (
        <S.Container>
            <button>end</button>

            <h1>예희님은 꼼꼼한 집순이!</h1>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut velit tortor, auctor semper ante scelerisque, rutrum luctus mi.
                Nullam pulvinar ante non lorem venenatis imperdiet.
                Mauris risus velit, mattis ut nulla in, porttitor posuere lorem.
                Ut at diam turpis. Fusce sit amet elit rhoncus erat dignissim hendrerit a vel sapien.
                Nam a metus quis velit vestibulum sagittis et a nisl.
                Morbi consectetur sit amet justo quis posuere.
                In tempor dui ut nibh molestie, non pharetra justo commodo.
            </div>

            <p>체크리스트로 더 현명하게 방을 구해보자!</p>

            <Link to='/checklist'>
                <button>나만의 체크리스트 보러가기</button>
            </Link>
        </S.Container>
    );
}