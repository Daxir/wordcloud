import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './game/Splash';
import Cloud from './game/Cloud';
import Score from './game/Score';

const App = () => {
  const [nickname, setNickname] = React.useState('');
  const [score, setScore] = React.useState(0);
  const increaseScore = React.useCallback((num: number) => setScore((s) => s + num), []);
  const resetGame = React.useCallback(() => {
    setNickname('');
    setScore(0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Splash nickname={nickname} setNickname={setNickname} />} />
      <Route path="/game" element={<Cloud increaseScore={increaseScore} />} />
      <Route path="/score" element={<Score nickname={nickname} score={score} resetGame={resetGame} />} />
    </Routes>
  );
};

export default App;
