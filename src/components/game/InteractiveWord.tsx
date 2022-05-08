import React from 'react';

interface IProps {
  word: string;
  good_words: string[];
  isCheckEnabled: boolean;
  increaseScore: (num: number) => void;
}

const InteractiveWord = ({ word, good_words, isCheckEnabled, increaseScore }: IProps) => {
  const isWordValid = good_words.includes(word);
  const [isSelected, setIsSelected] = React.useState(false);
  const [isLabelHidden, setIsLabelHidden] = React.useState(true);
  const [color, setColor] = React.useState('');

  React.useEffect(() => {
    if (!isCheckEnabled) {
      setColor(isSelected ? 'text-muted' : '');
    } else if (isCheckEnabled) {
      if (isSelected) {
        setColor(isWordValid ? 'text-success' : 'text-danger');
        increaseScore(isWordValid ? 2 : -1);
        setIsLabelHidden(!(isCheckEnabled && isSelected));
      } else {
        increaseScore(isWordValid ? -1 : 0);
      }
    }
  }, [isCheckEnabled, isSelected, isWordValid, increaseScore]);

  return (
    <div className="d-flex flex-column align-items-center">
      <p className={`text-decoration-underline mb-0 opacity-75 ${color}`} hidden={isLabelHidden}>
        {isWordValid ? 'Good' : 'Bad'}
      </p>
      <p className={color} onClick={() => setIsSelected(!isSelected)}>
        {word}
      </p>
    </div>
  );
};

export default InteractiveWord;
