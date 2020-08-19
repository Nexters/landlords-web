import React, { ReactElement } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import * as S from './styled';
import CANCEL_DARK from './svg/cancel-dark.svg';
import CHECKED_BOX from './svg/checked-box.svg';
import HUMAN_NORMAL from './svg/human-normal.svg';
import NAVIGATION_BACKWARD from './svg/navigation-backward.svg';
import NAVIGATION_OPEN_DOWN from './svg/navigation-open-down.svg';
import TEMP_LOGO from './svg/temp-logo.svg';
import TITLE_LOGO from './svg/title-logo.svg';
import UNCHECKED_BOX from './svg/unchecked-box.svg';

const Icons = {
  CHECKED_BOX,
  UNCHECKED_BOX,
  NAVIGATION_BACKWARD,
  NAVIGATION_OPEN_DOWN,
  HUMAN_NORMAL,
  TEMP_LOGO,
  CANCEL_DARK,
  TITLE_LOGO,
};

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  label?: string;
  iconLayoutStyle?: FlattenSimpleInterpolation;
  className?: string;
  size?: string;
  opacity?: string;
  onClick?: () => void;
}

export default function Icon({
  name,
  label,
  iconLayoutStyle,
  className,
  size,
  opacity,
  onClick,
}: IconProps): ReactElement {
  return (
    <S.Container
      onClick={onClick}
      className={className}
      iconLayoutStyle={iconLayoutStyle}
      size={size}
      opacity={opacity}>
      {label && <S.IconLabel>{label}</S.IconLabel>}
      <img src={Icons[name]} />
    </S.Container>
  );
}
