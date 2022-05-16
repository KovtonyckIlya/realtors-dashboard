import React from "react";
type Props = {
  className: string;
}

const LogOutIcon: React.FC<Props> = ({className}) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8.96753 18.5938L4.37498 14L8.96753 9.40625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.625 14L4.37822 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.625 4.375L22.75 4.375C22.9821 4.375 23.2046 4.46719 23.3687 4.63128C23.5328 4.79538 23.625 5.01794 23.625 5.25L23.625 22.75C23.625 22.9821 23.5328 23.2046 23.3687 23.3687C23.2046 23.5328 22.9821 23.625 22.75 23.625L16.625 23.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default LogOutIcon;
