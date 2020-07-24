import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
}

// TBD
export default function CloseButton({ onClick }: CloseButtonProps) {
  return <div onClick={ onClick }>X</div>;
}
