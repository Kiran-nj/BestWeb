import React, { useState } from 'react';
import './ToggleButton.css'; // Import the CSS file

const ToggleButton = ({onClick}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div onClick={onClick} className="flex items-center justify-center z-50 ">
      <input
        id="checkbox"
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor="checkbox"
        className={`toggle z-50 ${checked ? 'rotate-180' : ''}`}
      >
        <div
          id="bar1"
          className={`bars z-50  ${checked ? 'bar1-checked' : ''}`}
        ></div>
        <div
          id="bar2"
          className={`bars z-50 ${checked ? 'bar2-checked' : ''}`}
        ></div>
        <div
          id="bar3"
          className={`bars z-50 ${checked ? 'bar3-checked' : ''}`}
        ></div>
      </label>
    </div>
  );
};

export default ToggleButton;
