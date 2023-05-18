import React, { useState } from 'react';
//replacing switch with Switch as switch is not supported in latest version of react-router-dom package
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
function App() {
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [alert, setAlert] = useState(null);

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Enable light mode');
      setTextColor('light');
      //to change whole website background color
      document.body.style.backgroundColor = '#0c6a85';
      showAlert('dark mode has been enabled', 'success');
    } else {
      setMode('light');
      setBtnText('Enable dark mode');
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled', 'success');
    }
  };
  const [btnText, setBtnText] = useState('Enable dark mode');
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('black');
  return (
    <>
      <Router>
        <Navbar
          title='TextUtils App'
          aboutUs='About Us'
          mode={mode}
          toogleMode={toogleMode}
          btnText={btnText}
          textColor={textColor}
        />

        <Alert alert={alert} />

        <div className='container my-3'>
          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>

            <Route exact path='/'>
              <TextForm
                heading='Enter the text to analyze below'
                textColor={textColor}
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>

          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
