import './App.css';
import Flashcard from './components/Flashcard';
import flashcardData from './components/Flashcard';
import getNextCard from './components/Flashcard';

function App() {
  return (
    <>
      <h1>Flashcard Chemistry Quiz!</h1>
      <h3>Ready to learn some Chemistry? Test your knowledge here!</h3>
      <h4>Number of cards: 5</h4>
      {flashcardData.map((index, flashcard) => {
        <Flashcard key = {index} flashcard = {flashcard}/>

      })}
      <button className='next-card' onClick = {getNextCard}>⇒</button>
    
      
      
    </>
  )
}

export default App;
