import React, { Fragment } from "react";
import winnerImg from "../assets/undraw_winners.svg";
import Button from "./Button";

const Result = () => {
  return (
    <section className="quiz__body">
      <div className="quiz__body__image">
        <img src={winnerImg} alt="winner" />
      </div>
      <div className="quiz__body__resultText">
        <h2>Results</h2>
      </div>
      <div className="quiz__body__score">
        <p>
          You got <span className="quiz__body__scorecard">4</span> correct
          answers
        </p>
      </div>
      <div>
        <Button
          value="Try again"
          onClick={() => console.log("Next")}
          className="btn btn-restart"
        />
      </div>
    </section>
  );
};

export default Result;
