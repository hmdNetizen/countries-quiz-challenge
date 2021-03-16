import React, { Fragment } from "react";
import quizImg from "../assets/undraw_adventure_4hum 1.svg";
import PropTypes from "prop-types";
import Button from "./Button";

const quiz = () => {
  return (
    <Fragment>
      <header className="quiz__header">
        <h1 className="quiz__heading">Country Quiz</h1>
        <img src={quizImg} alt="Quiz" className="quiz__img" />
      </header>
      <section className="quiz__body">
        <div className="quiz__flag">
          <img src="https://restcountries.eu/data/afg.svg" alt="flag" />
        </div>
        <header>
          <h2 className="quiz__question">Kuala Lumpur is the capital of</h2>
        </header>
        <div className="quiz__answers">
          <button className="quiz__option selected__option selected__option--wrong">
            <span>A</span>
            <span className="quiz__option__title--1"> Vietnam </span>
            <span className="quiz__option__icon">
              <i className="far fa-times-circle"></i>
            </span>
          </button>
          <button className="quiz__option selected__option selected__option--none">
            <span className="quiz__option__title--2">B</span> Malaysia
          </button>
          <button className="quiz__option">
            <span className="quiz__option__title--2">C</span> Sweden
          </button>
          <button className="quiz__option selected__option selected__option--correct">
            <span>D</span>
            <span className="quiz__option__title--1"> Austria </span>
            <span className="quiz__option__icon">
              <i className="far fa-check-circle"></i>
            </span>
          </button>
        </div>
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

export default quiz;
