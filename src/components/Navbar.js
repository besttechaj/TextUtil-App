import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  //const [btnText, setBtnText] = useState('Enable dark mode');

  // const updateBackground = () => {
  //   if (props.mode.color === 'black') {
  //     props.mode({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white',
  //     });
  //     setBtnText('Enable light mode');
  //   } else {
  //     props.mode({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       border: '1px solid black',
  //     });
  //     setBtnText('Enable dark mode');
  //   }
  // };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <h1>{props.title}</h1>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                {props.aboutUs}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='form-check form-switch text-light'>
        <input
          className='form-check-input'
          type='checkbox'
          role='switch'
          id='flexSwitchCheckChecked'
          onClick={props.toogleMode}
        />
        <label
          className={`form-check-label text-${props.textColor}`}
          htmlFor='flexSwitchCheckChecked'
        >
          {props.btnText}
        </label>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'enter your title here',
  aboutUs: 'Enter your about us here',
};
