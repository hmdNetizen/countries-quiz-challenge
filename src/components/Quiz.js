import React, { Fragment, useState } from "react";
import quizImg from "../assets/undraw_adventure_4hum 1.svg";
import PropTypes from "prop-types";
import Button from "./Button";

const Quiz = ({ questions }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(true);

  const handleSelectedAnswer = (value) => {
    if (value) {
      console.log("You selected the right answer");
    } else {
      console.log("You selected the wrong answer");
    }
  };

  const handleSelectedButton = (index) => {
    if (index) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };
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
          <div className="quiz__answers">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`quiz__option ${
                  questions[currentQuestion] === currentQuestion &&
                  isSelected &&
                  option.isCorrect
                    ? "selected__option--correct"
                    : "selected__option--wrong"
                }`}
                // className={`quiz__option ${
                //   isSelected && questions[currentQuestion].option.isCorrect
                //     ? "selected__option--correct"
                //     : isSelected && index === option.id && !option.isCorrect
                //     ? "selected__option--wrong"
                //     : "quiz__option"
                // } `}
                // className="quiz__option selected__option"
                onClick={() => {
                  handleSelectedAnswer(option.isCorrect);
                  handleSelectedButton(index);
                }}
              >
                <span>A</span>
                <span className="quiz__option__title--1">{option.answer}</span>
                {isSelected && option.isCorrect && index === option.id ? (
                  <span className="quiz__option__icon">
                    <i className="far fa-check-circle"></i>
                  </span>
                ) : (
                  <span className="quiz__option__icon">
                    <i className="far fa-times-circle"></i>
                  </span>
                )}
              </button>
            ))}
          </div>
        </Fragment>
        {/*  */}
        {/* <button
            // className="quiz__option selected__option--none"
            className={`quiz__option selected__option--none ${
              questions[0].options[1].isCorrect
                ? "selected__option--correct"
                : "selected__option--wrong"
            }}`}
            onClick={() =>
              handleSelectedAnswer(questions[0].options[1].isCorrect)
            }
          >
            <span className="quiz__option__title--2">B</span>{" "}
            {questions[0].options[1].answer}
          </button>
          <button
            className={`quiz__option selected__option--none ${
              questions[0].options[2].isCorrect
                ? "selected__option--correct"
                : "selected__option--wrong"
            }}`}
            onClick={() =>
              handleSelectedAnswer(questions[0].options[2].isCorrect)
            }
          >
            <span className="quiz__option__title--2">C</span>{" "}
            {questions[0].options[2].answer}
          </button>
          <button
            className={`quiz__option selected__option--none ${
              questions[0].options[3].isCorrect
                ? "selected__option--correct"
                : "selected__option--wrong"
            }}`}
            onClick={() =>
              handleSelectedAnswer(questions[0].options[3].isCorrect)
            }
          >
            <span>D</span>
            <span className="quiz__option__title--1">
              {" "}
              {questions[0].options[3].answer}{" "}
            </span>
            <span className="quiz__option__icon">
              <i className="far fa-check-circle"></i>
            </span>
          </button> */}
        {/* </div> */}
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
              onClick={() => console.log("Quiz Submitted")}
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
