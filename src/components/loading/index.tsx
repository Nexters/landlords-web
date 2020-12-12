import React from 'react';
import Lottie from 'react-lottie';
import color from 'styles/color';
import { ContainerWrapper } from 'styles/styled';

import * as S from './styled';
interface LoadingProps {
  image: any;
  text?: string;
  width: number;
  height: number;
}
export default function Loading({ image, text, width, height }: LoadingProps) {
  return (
    <ContainerWrapper bgColor={color.primaryDeepDarkBlue}>
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
    </ContainerWrapper>
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
