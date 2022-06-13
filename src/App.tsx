import './App.css';
import DateFNSContainer from './containers/DateFNSContainer';
import EmotionContainer from './containers/EmotionContainer';
import LodashContainer from './containers/LodashContainer';
import ReactHookFormContainer from './containers/ReactHookFormContainer';
import { UseReducerContainer } from './containers/UseReducerContainer';

function App() {
  return (
    <div className="App">
      <EmotionContainer />
      <DateFNSContainer />
      <LodashContainer />
      <ReactHookFormContainer />
      <UseReducerContainer />
    </div>
  );
}

export default App;
