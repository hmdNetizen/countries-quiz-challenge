import React, { Fragment, useState } from "react";
import quizImg from "../assets/undraw_adventure_4hum 1.svg";
import PropTypes from "prop-types";
import Button from "./Button";

const Quiz = ({ questions }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Fragment>
      <header className="quiz__header">
        <h1 className="quiz__heading">Country Quiz</h1>
        <img src={quizImg} alt="Quiz" className="quiz__img" />
      </header>
      <section className="quiz__body">
        <Fragment>
          <div className="quiz__flag">
            <img src="https://restcountries.eu/data/afg.svg" alt="flag" />
          </div>
          <header>
            <h2 className="quiz__question">
              {currentQuestion + 1}/{questions.length}
              {" - "}
              {questions[currentQuestion].query}
            </h2>
          </header>
          <ol className="quiz__option__list">
            <li className="quiz__option__listItem">
              <button data-text="A" className="quiz__option__listBtn">
                8
              </button>
            </li>
            <li className="quiz__option__listItem">
              <button
                data-text="B"
                className="quiz__option__listBtn quiz__option--correct"
              >
                10
              </button>
            </li>
            <li className="quiz__option__listItem">
              <button data-text="C" className="quiz__option__listBtn">
                12
              </button>
            </li>
            <li className="quiz__option__listItem">
              <button
                data-text="D"
                className="quiz__option__listBtn quiz__option--incorrect"
              >
                14
              </button>
            </li>
          </ol>
        </Fragment>

        <div className="btn-wrapper">
          {currentQuestion > 0 && (
            <Button
              value="Previous"
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="btn btn-previous"
            />
          )}

          <Button
            value="Next"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            className={`btn btn-next ${
              currentQuestion + 1 >= questions.length && "btn-hide"
            }`}
          />
          {currentQuestion + 1 >= questions.length && (
            <Button
              value="Submit"
              className={`btn btn-submit`}
              disabled={currentQuestion + 1 >= questions.length}
            />
          )}
        </div>
      </section>
    </Fragment>
  );
};

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default Quiz;
