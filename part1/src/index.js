import React from "react";
import ReactDOM from "react-dom";

const Header = ({course}) => {
  return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
  return <p>{`${name} ${exercises}`}</p>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts.reduce(
        (prevExercises, nextExercises) =>
          prevExercises + nextExercises.exercises,
        0
      )}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const { name, parts } = course;

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total
        parts={parts}
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
