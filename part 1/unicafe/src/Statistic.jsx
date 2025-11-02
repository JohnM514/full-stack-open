const StatiscticLine = ({ text, value }) => {
  if (text === "Positive") {
    return (
      <p>
        {text} Reviews: {value}%
      </p>
    );
  } else {
    return (
      <p>
        {text} Reviews: {value}
      </p>
    );
  }
};

const Statistic = ({ goodReviews, neutralReviews, badReviews }) => {
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
        <StatiscticLine text="Good" value={goodReviews} />
        <StatiscticLine text="Neutral" value={neutralReviews} />
        <StatiscticLine text="Bad" value={badReviews} />
        <StatiscticLine text="Total" value={totalReviews} />
        <StatiscticLine text="Average" value={averageReviews} />
        <StatiscticLine text="Positive" value={goodReviewsPercentage} />
      </div>
    );
  }
};

export default Statistic;
