import React from 'react'

interface Props {
  onClick: () => void;
}

export default function CloseButton({ onClick }: Props) {
  return <div>X</div>
}