import React from 'react';
import ClockHeading from './component/ClockHeading';
import ClockSlogan from './component/ClockSlogan';
import CurrentTime from './component/CurrentTime';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <center>
      <ClockHeading/>
      <ClockSlogan/>
      <CurrentTime/>
      </center>
    </React.Fragment>
  );
}

export default App;
