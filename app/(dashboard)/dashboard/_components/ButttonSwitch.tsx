import React from 'react';

interface ButtonSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
          checked ? 'bg-secondary' : 'bg-gray-800'
        }`}
      >
        <span
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            checked ? 'translate-x-4' : ''
          }`}
        ></span>
      </span>
    </label>
  );
};

export default ButtonSwitch;