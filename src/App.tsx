import GlobalStyles from "styles/GlobalStyles";

// HOMEWORKS
import HomeWork_06 from "./homeworks/HomeWork_06/HomeWork_06";
import HomeWork_07 from "./homeworks/HomeWork_07/HomeWork_07";
// LESSONS
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Homework_08 from "homeworks/HomeWork_08/HomeWork_08";
//CONSULTATIONS


function App() {
  return (
    <>
      <GlobalStyles />
      {/* LESSONS */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* HOMEWORKS */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      < Homework_08 />
      {/* CONSULTATIONS */}
      {/* <Consultation_03 /> */}
    </>
  );
}

export default App;
