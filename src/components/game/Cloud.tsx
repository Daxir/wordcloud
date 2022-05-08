import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud as CloudType } from '../../types/Cloud';
import InteractiveWord from './InteractiveWord';

const Cloud = ({ increaseScore }: { increaseScore: (num: number) => void }) => {
  const [cloud, setCloud] = React.useState<CloudType>({ question: 'Loading...', all_words: [], good_words: [] });
  const [isCheckEnabled, setIsCheckEnabled] = React.useState(false);
  const navigate = useNavigate();

  const getRandomPadding = () => Math.floor(Math.random() * 4) + 1;
  const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  const finishGame = () => {
    navigate('../score');
  };

  React.useEffect(() => {
    (async () => {
      try {
        setCloud(await (await fetch('/api/words')).json());
      } catch (err) {
        setCloud((c) => ({ ...c, question: 'Could not fetch game' }));
      }
    })();
  }, []);

  return (
    <div>
      <div className="fw-bold text-center mb-4">{capitalize(cloud.question)}</div>
      <div className="border border-dark rounded d-flex flex-wrap justify-content-center p-4">
        {cloud.all_words.map((word) => (
          <div className={`px-${getRandomPadding()} py-${getRandomPadding()}`} key={word}>
            <div className="p-4 fw-bold">
              <InteractiveWord
                word={word}
                good_words={cloud.good_words}
                isCheckEnabled={isCheckEnabled}
                increaseScore={increaseScore}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        {isCheckEnabled ? (
          <button type="button" className="btn btn-outline-primary px-4" onClick={() => finishGame()}>
            finish game
          </button>
        ) : (
          <button type="button" className="btn btn-outline-primary px-4" onClick={() => setIsCheckEnabled(true)}>
            check answers
          </button>
        )}
      </div>
    </div>
  );
};

export default Cloud;
