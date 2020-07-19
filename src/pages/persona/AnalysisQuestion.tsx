import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

import Button from '../../components/Button';

type AnalysisQuestionProps = {};

export default function AnalysisQuestion({ }: AnalysisQuestionProps): ReactElement {
    return (
        <S.Container>
            <button>back</button>

            <div>
                <h1>Question?</h1>
                <p>1/10</p>
            </div>
            <div>
                progress bar
            </div>

            <div>
                <a>card1</a>
                <a>card2</a>
            </div>

            <Link to='/persona/result'>
                <Button name='next' value='다음' />
            </Link>
        </S.Container>
    );
}