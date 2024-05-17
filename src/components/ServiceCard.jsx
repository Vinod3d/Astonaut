import React from 'react';

const ServiceCard = ({ logo, text }) => {
  return (
    <div className='card-container'>
      <img src={logo} alt='logo' className='logo' />
      <div className='bottom-text'>{text}</div>
    </div>
  );
};

export default ServiceCard;
