import './App.css';
import DateFNSContainer from './containers/DateFNSContainer';
import EmotionContainer from './containers/EmotionContainer';
import LodashContainer from './containers/LodashContainer';

function App() {
  return (
    <div className="App">
      <EmotionContainer />
      <DateFNSContainer />
      <LodashContainer />
    </div>
  );
}

export default App;
