import { useState } from "react";
import Button from "./Button";

// Source - https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
// Posted by Ry-
// Retrieved 2025-11-06, License - CC BY-SA 4.0

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [anecdotesVotes, setAnecdotesVotes] = useState(
    Array(anecdotes.length).fill(0)
  );

  const [selected, setSelected] = useState(0);

  const randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    console.log(randomNumber);
    setSelected(randomNumber);
  };

  const voteAnecdote = () => {
    console.log("Voted for", selected);
    const newAnecdotesVotes = [...anecdotesVotes];
    newAnecdotesVotes[selected] += 1;
    setAnecdotesVotes(newAnecdotesVotes);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {anecdotesVotes[selected]} votes.</p>
      <div>
        <Button text="Vote" onClick={voteAnecdote} />
        <Button text="Next anecdote" onClick={randomAnecdote} />
      </div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[indexOfMax(anecdotesVotes)]}</p>
      <p>Has {anecdotesVotes[indexOfMax(anecdotesVotes)]} votes.</p>
    </>
  );
};

export default App;
