import React from 'react';
import AppList from './component/applist/applist';
import STORE from './store/store';

function App(){

  return (
    <main className="App">

      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>

      <AppList store={STORE}></AppList>    
      
    </main>
  )

}

export default App;
