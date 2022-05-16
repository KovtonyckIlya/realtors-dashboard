import React from "react";
type Props = {
  className: string;
}

const NextIcon: React.FC<Props> = ({className}) => {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L6 6L1 11" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default NextIcon;
