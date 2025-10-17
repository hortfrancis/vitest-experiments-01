import { useState } from 'react';

const ButtonCard = () => {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(prev => !prev);

  return (
    <div className="button-card">
      <button onClick={handleClick}>Click Me</button>
      {clicked && <p>You clicked the button!</p>}
    </div>
  );
};

export default ButtonCard;
