import React from 'react';
import List from './List';

function App({store}) {
  //logic here to deconstruct store and pass appropriate calls to List
  //List will need to be passed a header and an array of cards that belong in the list
  //List should be called once for each object in store.lists

  let allCards = store.allCards;
  let lists = store.lists; 
  
  
  lists.forEach(listItem => {
    listItem.cards = listItem.cardIds.map(id => allCards[id])
  }); //add a cards key to each list that contains an array of the cards
  

  const htmlLists = lists.map(list =>
      <List header={list.header} cards={list.cards} />
    );
  

  return (
    <main className='App'>

    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {htmlLists}
    </div>

    </main>
  );
}

export default App;

/* 
The App component should render markup matching the design.html: 
    the main element, a header with the h1 and a div with class 'App-list'.

The App component will accept 1 prop, store.
    The store prop is an object with 2 keys: lists and allCards.
    lists is an array of objects.
    allCards is an object where each key is a card's ID 
    and the value is the card object with a title and content.

You'll be given a dummy STORE object to pass to your App.

The App should render a List component for each of the items in the store.lists array.

Each instance of the List component should be passed 2 props (and a key). The 2 props are header and cards.
    The header prop is a string for the List's header.
    The cards prop will be an array of card objects.

You'll need to combine the cardIds array for the list with the allCards object.
*/