import { useState } from "react";
import Button from "./Button";

const Statistics = ({ goodReviews, neutralReviews, badReviews }) => {
  console.log(goodReviews, neutralReviews, badReviews);
  const totalReviews = goodReviews + neutralReviews + badReviews;
  const averageReviews = (goodReviews - badReviews) / totalReviews;
  const goodReviewsPercentage = (goodReviews / totalReviews) * 100;

  if (goodReviews === 0 && neutralReviews === 0 && badReviews === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <p>Good Reviews: {goodReviews}</p>
        <p>Neutral Reviews: {neutralReviews}</p>
        <p>Bad Reviews: {badReviews}</p>
        <p>Total Reviews: {totalReviews}</p>
        <p>Average Reviews: {averageReviews}</p>
        <p>Postive Reviews: {goodReviewsPercentage}</p>
      </div>
    );
  }
};

function App() {
  const [goodReviews, setGoodReviews] = useState(0);
  const [neutralReviews, setNeutralReviews] = useState(0);
  const [badReviews, setBadReviews] = useState(0);

  const addReview = (review) => {
    return () => {
      if (review === "Good") {
        console.log("The review was good!");
        setGoodReviews((prev) => prev + 1);
      } else if (review === "Neutral") {
        console.log("The review was neutral!");
        setNeutralReviews((prev) => prev + 1);
      } else {
        console.log("The review was bad!");
        setBadReviews((prev) => prev + 1);
      }
    };
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={addReview("Good")} text="Good" />
      <Button onClick={addReview("Neutral")} text="Neutral" />
      <Button onClick={addReview("Bad")} text="Bad" />
      <Statistics
        goodReviews={goodReviews}
        neutralReviews={neutralReviews}
        badReviews={badReviews}
      />
    </>
  );
}

export default App;
