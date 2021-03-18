import React, { Fragment, useState } from "react";
import quizImg from "../assets/undraw_adventure_4hum 1.svg";
import PropTypes from "prop-types";
import Button from "./Button";

const Quiz = ({ questions }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const handleSelectedAnswer = (value) => {
    if (value) {
      alert("You selected the right answer");
    } else {
      alert("You selected the wrong answer");
    }
  };
  return (
    <Fragment>
      <header className="quiz__header">
        <h1 className="quiz__heading">Country Quiz</h1>
        <img src={quizImg} alt="Quiz" className="quiz__img" />
      </header>
      <section className="quiz__body">
        {questions.map((question) => (
          <Fragment key={question.id}>
            <div className="quiz__flag">
              <img src="https://restcountries.eu/data/afg.svg" alt="flag" />
            </div>
            <header>
              <h2 className="quiz__question">{question.query}</h2>
            </header>
            <div className="quiz__answers">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz__option ${
                    option.isCorrect
                      ? "selected__option--correct"
                      : "selected__option--wrong"
                  }}`}
                  // className="quiz__option selected__option"
                  onClick={() => {
                    handleSelectedAnswer(option.isCorrect);
                  }}
                >
                  <span>A</span>
                  <span className="quiz__option__title--1">
                    {" "}
                    {option.answer}
                  </span>
                  {option.isCorrect ? (
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
        ))}

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
        <div>
          <Button
            value="Next"
            onClick={() => console.log("Next")}
            className="btn btn-next"
          />
        </div>
      </section>
    </Fragment>
  );
};

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default Quiz;
