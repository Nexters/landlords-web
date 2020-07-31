import React, { ReactElement } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import * as S from './styled';
import CHECK_SQAURE from './svg/check-square.svg';
import CHEVRON_DOWN from './svg/chevron-down.svg';
import ICON_HUMAN_NORMAL from './svg/icon-human-normal.svg';
import NAVIGATION_BACKWARD from './svg/navigation-backward.svg';
import SQUARE from './svg/square.svg';
// TODO: 로고 전달받으면 교체하기
import TEMP_LOGO from './svg/temp-logo.svg';

const Icons = {
  CHEVRON_DOWN,
  CHECK_SQAURE,
  SQUARE,
  NAVIGATION_BACKWARD,
  TEMP_LOGO,
  ICON_HUMAN_NORMAL,
};

type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  label?: string;
  iconLayoutStyle?: FlattenSimpleInterpolation;
  className?: string;
}

export default function Icon({ name, label, iconLayoutStyle, className }: IconProps): ReactElement {
  return (
    <S.Container className={className} iconLayoutStyle={iconLayoutStyle}>
      {label && <S.IconLabel>{label}</S.IconLabel>}
      <img src={Icons[name]} />
    </S.Container>
  );
}
