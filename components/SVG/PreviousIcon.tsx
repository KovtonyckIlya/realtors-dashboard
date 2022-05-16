import React from "react";
type Props = {
  className: string;
}

const PreviousIcon: React.FC<Props> = ({className}) => {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 11L1 6L6 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default PreviousIcon;
