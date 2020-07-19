import React, { useMemo } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactNode;
  elementId: string;
}

export default function Portal({ children, elementId }: Props) {
  const rootElement = useMemo(() => document.getElementById(elementId), [
    elementId,
  ]) || document.createElement('div')

  return createPortal(children, rootElement)
}
