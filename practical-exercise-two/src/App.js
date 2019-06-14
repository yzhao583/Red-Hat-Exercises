import React from 'react';
import './sass/App.scss';
import BoxComponent from './components/box-component';

function App() {
  return (
    <div>
      <div className="box-component-container">
        <BoxComponent />
      </div>
    </div>
  );
}

export default App;
