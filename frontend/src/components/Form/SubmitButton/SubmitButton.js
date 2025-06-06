import { Funnel } from '@phosphor-icons/react';
import React from 'react';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto flex items-center justify-center gap-1"
    >
      <Funnel color="#FFF" weight="fill" />
      {text}
    </button>
  );
}

export default SubmitButton;
