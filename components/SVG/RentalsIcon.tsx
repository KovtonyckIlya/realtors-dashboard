import React from "react";
type Props = {
  className: string;
}

const RentalsIcon: React.FC<Props> = ({className}) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M19.2683 10.9065H24.5183V5.65649" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.19409 7.1941C8.08786 6.30033 9.14891 5.59136 10.3167 5.10766C11.4844 4.62396 12.736 4.375 14 4.375C15.264 4.375 16.5156 4.62396 17.6833 5.10766C18.8511 5.59136 19.9121 6.30033 20.8059 7.1941L24.5182 10.9064" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.73169 17.0935H3.48169V22.3435" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.8059 20.8059C19.9122 21.6997 18.8511 22.4087 17.6834 22.8924C16.5156 23.3761 15.264 23.625 14 23.625C12.7361 23.625 11.4845 23.3761 10.3167 22.8924C9.14894 22.4087 8.08789 21.6997 7.19412 20.8059L3.48181 17.0936" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default RentalsIcon;
