import React from 'react';
import Card from '../card/card';

const AppList = (props) => {

  const lists = props.store.lists.map((list) => (
    <section className="List" key={list.id}>
    <header className="List-header">
      <h2>{list.header}</h2>
    </header>
      <Card allCards={props.store.allCards} cardIds={list.cardIds}></Card>
    </section>
  ));

  return(
    <div className="App-list">
      {lists}
    </div>
  );
  
}

export default AppList;