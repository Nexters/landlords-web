import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  elementId: string;
}

export default function Portal({ children, elementId }: Props) {
  // const rootElement = document.getElementById(elementId));

  return createPortal(children, document.getElementById(elementId)!);
}
