import React from 'react';

function About() {
  // const myStyle = {
  //   color: 'white',
  //   backgroundColor: 'black',
  // };
  return (
    <div className='container my-3'>
      <h2 className='my-3'>About Us</h2>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Email
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>besttechnician@123.com</div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Phone
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>8889916873</div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Address
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              Mr A. Payne ARAMARK Ltd. 30 Commercial Road Fratton PORTSMOUTH
              Hampshire PO1 1AA UNITED KINGDOM
            </div>
          </div>
        </div>
      </div>
      <div className='container my-3'>
        <button className='btn btn-primary'>Enable dark mode</button>
      </div>
    </div>
  );
}

export default About;
