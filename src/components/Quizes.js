import Quiz from "./Quiz";
import Result from "./Result";
import { questions } from "./questions";

const Quizes = () => {
  return (
    <main className="container">
      <Quiz questions={questions} />
      {/* <Result /> */}
    </main>
  );
};

export default Quizes;
