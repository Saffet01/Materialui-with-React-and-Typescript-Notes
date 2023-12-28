import './App.css';
import { LessonTypography } from './components/LessonTypography';
import { LessonButton } from './components/LessonButton';
import { LessonButtonGroup } from './components/LessonButtonGroup';
import { LessonTextField } from './components/LessonTextField';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography/> */}
      {/* <LessonButton></LessonButton> */}
      {/* <LessonButtonGroup></LessonButtonGroup> */}
      <LessonTextField></LessonTextField>
    </div>
  );
}

export default App;
