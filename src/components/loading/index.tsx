import React from 'react';
import Lottie from 'react-lottie';

import * as S from './styled';
interface LoadingProps {
  image: any;
  text?: string;
  width: number;
  height: number;
}
export default function Loading({ image, text, width, height }: LoadingProps) {
  return (
    <S.Container>
      <Lottie
        options={lottieOptions(image)}
        height={height}
        width={width}
        isStopped={false}
        isPaused={false}
      />
      {text ? <S.LoadingText>{text}...</S.LoadingText> : <></>}
    </S.Container>
  );
}

const lottieOptions = (image: any) => ({
  loop: true,
  autoplay: true,
  animationData: image,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
});
