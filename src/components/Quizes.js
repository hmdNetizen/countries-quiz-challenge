import Quiz from "./Quiz";
import { questions } from "./questions";

const Quizes = () => {
  return (
    <main className="container">
      <Quiz questions={questions} />
    </main>
  );
};

export default Quizes;
