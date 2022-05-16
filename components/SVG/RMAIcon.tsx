import React from "react";
type Props = {
  className: string;
}

const RMAIcon: React.FC<Props> = ({className}) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10.5 16.625H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.5 13.125H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.5002 4.375H21.875C22.1071 4.375 22.3296 4.46719 22.4937 4.63128C22.6578 4.79538 22.75 5.01794 22.75 5.25V23.625C22.75 23.8571 22.6578 24.0796 22.4937 24.2437C22.3296 24.4078 22.1071 24.5 21.875 24.5H6.125C5.89294 24.5 5.67038 24.4078 5.50628 24.2437C5.34219 24.0796 5.25 23.8571 5.25 23.625V5.25C5.25 5.01794 5.34219 4.79538 5.50628 4.63128C5.67038 4.46719 5.89294 4.375 6.125 4.375H10.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.625 7.875V7C9.625 5.83968 10.0859 4.72688 10.9064 3.90641C11.7269 3.08594 12.8397 2.625 14 2.625C15.1603 2.625 16.2731 3.08594 17.0936 3.90641C17.9141 4.72688 18.375 5.83968 18.375 7V7.875H9.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export default RMAIcon;
