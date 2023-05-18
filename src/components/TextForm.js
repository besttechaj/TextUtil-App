import React, { useState } from 'react';

const TextForm = (props) => {
  const handleExtraSpaces = () => {
    //this will spit the text and store them inside array whenever it find spaces
    let removeSpaceText = text.split(/[ ]+/);
    //since slit() method removed the space so here we are adding it again and adding one space between them
    setText(removeSpaceText.join(' '));
    props.showAlert('Extra space has been removed', 'success');
  };

  const handleCopy = () => {
    //store  the whole line including tags inside random variable
    var copyText = document.getElementById('myBox');
    //this will select the whole text line which is stored
    copyText.select();
    //it will filter out the copied text except the tags
    navigator.clipboard.writeText(copyText.value);
    props.showAlert('Text has been Copied', 'success');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Text has been cleared', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase', 'success');
  };
  const [text, setText] = useState('');
  return (
    <>
      <div className='container'>
        <h1
          style={{
            color:
              document.body.style.backgroundColor === '#053369'
                ? 'white'
                : 'black',
          }}
        >
          {props.heading}
        </h1>
        <div className='mb-3'>
          <textarea
            className={`form-control text-${props.textColor}`}
            style={{
              backgroundColor: props.mode === 'dark' ? '#053369' : 'white',
            }}
            id='myBox'
            rows='8'
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className='btn btn-primary mx-3 my-2' onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>
            Convert to Lower Case
          </button>
          <button
            className='btn btn-primary mx-2 my-2'
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className='btn btn-primary mx-2 my-2'
            onClick={handleExtraSpaces}
          >
            Remove extra spaces
          </button>
        </div>
      </div>
      <div className='container my-3'>
        <h1
          style={{
            color:
              document.body.style.backgroundColor === '#053369'
                ? 'white'
                : 'black',
          }}
        >
          Your text summary
        </h1>

        <p
          style={{
            color:
              document.body.style.backgroundColor === '#053369'
                ? 'white'
                : 'black',
          }}
        >
          {text.split(' ').length - 1} words and characters {text.length}
        </p>
        <p
          style={{
            color:
              document.body.style.backgroundColor === '#053369'
                ? 'white'
                : 'black',
          }}
        >
          {0.008 * text.split(' ').length} minutes Read
        </p>
        <h2
          style={{
            color:
              document.body.style.backgroundColor === '#053369'
                ? 'white'
                : 'black',
          }}
        >
          Preview
        </h2>
        <h3
          style={{
            color:
              document.body.style.backgroundColor === '#053369'
                ? 'white'
                : 'black',
          }}
        >
          {text.length > 0 ? text : 'Enter something to preview it here'}
        </h3>
      </div>
    </>
  );
};

export default TextForm;
