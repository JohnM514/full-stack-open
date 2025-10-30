const Total = (props) => {
  const [{ exercises: part1 }, { exercises: part2 }, { exercises: part3 }] =
    props.parts;
  return <p>Number of exercises {part1 + part2 + part3}</p>;
};

export default Total;
