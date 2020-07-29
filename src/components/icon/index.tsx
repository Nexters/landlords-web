import React, { ReactElement } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import * as S from './styled';
import CHECKED_BOX from './svg/checked-box.svg';
import NAVIGATION_BACKWARD from './svg/navigation-backward.svg';
import NAVIGATION_OPEN_DOWN from './svg/navigation-open-down.svg';
import UNCHECKED_BOX from './svg/unchecked-box.svg';

const Icons = {
  CHECKED_BOX,
  UNCHECKED_BOX,
  NAVIGATION_BACKWARD,
  NAVIGATION_OPEN_DOWN,
};

type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  label?: string;
  iconLayoutStyle?: FlattenSimpleInterpolation;
  className?: string;
  size: string;
}

export default function Icon({
  name,
  label,
  iconLayoutStyle,
  className,
  size,
}: IconProps): ReactElement {
  return (
    <S.Container className={className} iconLayoutStyle={iconLayoutStyle} size={size}>
      {label && <S.IconLabel>{label}</S.IconLabel>}
      <img src={Icons[name]} />
    </S.Container>
  );
}
