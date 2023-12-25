import './App.css'
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState( 15 );

  const addValue = () => {
    if ( counter < 25 ) {
      counter++;
      console.log( "clicked", counter );
      setCounter( counter );
    }
    else {
      setCounter( 25 );
    }
  }
  const removeValue = () => {
    if ( counter > 0 ) {
      counter--;
      console.log( "clicked", counter );
      setCounter( counter );
    }
    else {
      setCounter( 0 );
    }

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: { counter }</h2>

      <button onClick={ addValue }>Add value</button> <br />
      <button onClick={ removeValue }>Remove value</button>
    </>
  )
}

export default App
