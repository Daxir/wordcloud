import React from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = ({ nickname, setNickname }: { nickname: string; setNickname: (str: string) => void }) => {
  const [isChechingEnabled, setIsChechingEnabled] = React.useState(false);
  const navigate = useNavigate();

  const handlePlay = () => {
    setIsChechingEnabled(true);
    if (nickname.length > 0) {
      navigate('../game');
    }
  };

  return (
    <div>
      <h1 className="fw-bold text-center">Wordcloud game</h1>
      <div className="mt-4">
        <input
          className={`form-control p-2 ${isChechingEnabled && nickname.length <= 0 ? 'border-danger' : ''}`}
          placeholder="Enter your nickname here..."
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          required
        />
        <div className="text-danger" hidden={!isChechingEnabled || nickname.length > 0}>
          Please choose a nickname.
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          type="button"
          className="btn btn-outline-primary px-4"
          disabled={isChechingEnabled && nickname.length <= 0}
          onClick={handlePlay}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Splash;
