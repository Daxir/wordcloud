import { useNavigate } from 'react-router-dom';

interface IProps {
  nickname: string;
  score: number;
  resetGame: () => void;
}

const Score = ({ nickname, score, resetGame }: IProps) => {
  const navigate = useNavigate();

  const handleReset = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <p className="fw-bold">Congratulations, {nickname}!</p>
      <p className="fw-bold">Your score:</p>
      <p className="fw-bold text-primary">{score} points</p>
      <button type="button" className="btn btn-outline-primary px-4" onClick={handleReset}>
        Play again
      </button>
    </div>
  );
};

export default Score;
