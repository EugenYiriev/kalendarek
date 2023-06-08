import React from 'react';

const Header = (props) => {
  return (
    <header className='header'>
      <p>{props.title}</p>
    </header>
  );
};

export default Header;