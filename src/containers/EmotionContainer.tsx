import { useState } from 'react';
import Button from '../components/Button';

function EmotionContainer() {
  const colors = ['green', 'red', 'blue', 'purple'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const updateColor = (newCurrentIndex: number) => {
    setCurrentIndex(newCurrentIndex);

    if (colors[newCurrentIndex + 1]) {
      setNextIndex(newCurrentIndex + 1);
    } else {
      setNextIndex(0);
    }
  }

  return (
    <>
      <h2>1. Using Emotion to pass props into styled components.</h2>
      <Button
        backgroundColor={`${colors[currentIndex]}`}
        onClick={() => updateColor(nextIndex)}
      >
        This button is {colors[currentIndex]}. Click it to make it {colors[nextIndex]}!
      </Button>
    </>
  )
}

export default EmotionContainer;