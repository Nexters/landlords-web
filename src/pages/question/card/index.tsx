import React from 'react';

import * as S from './styled';

interface CardProps {
  uid: number;
  contents: string;
  index: number;
  onClick: (index: number) => void;
}

export default function Card({ uid, contents, index, onClick }: CardProps) {
  const sortedContents = contents.split(/\\n/).map((line) => {
    const highlight = line.includes('<hr>')
      ? line.substring(line.lastIndexOf('<hr>') + 4, line.lastIndexOf('</hr>'))
      : '';
    const prevHighlight = line.split('<hr>')[0];
    const nextHighlight = line.split('</hr>')[1];
    return (
      <>
        <span key={line}>
          {prevHighlight}
          <S.Highlight>{highlight}</S.Highlight>
          {nextHighlight}
        </span>
        <br />
      </>
    );
  });

  return (
    <S.CardWrapper onClick={() => onClick(index)} data-index={uid}>
      <S.CardContent>{sortedContents}</S.CardContent>
    </S.CardWrapper>
  );
}
