import { useState } from 'react';

function Rules({ className }) {
  const [display, setDisplay] = useState(false);
  return (
    <button
      className={`frame-BG mb-6 w-full py-2 ${className}`}
      onClick={() => setDisplay((prevState) => !prevState)}
    >
      <span className='BG flex items-center'>
        <span className='icon material-icons-outlined mr-2 text-2xl text-darkViolet dark:text-brightViolet'>
          description
        </span>
        <span className='text text-xl font-semibold uppercase text-darkViolet dark:text-brightViolet'>
          RULES
        </span>
        <span
          className={`icon material-icons-outlined mr-2 ml-auto text-3xl text-darkViolet transition-transform duration-300 dark:text-brightViolet ${
            display && 'rotate-45'
          }`}
        >
          add
        </span>
      </span>
      {display && (
        <>
          <hr className='my-3 h-px border-0 bg-dullWhite dark:bg-gray-600' />
          <ol className='ml-6 list-disc text-lg text-left'>
            <li className='mb-1'>Questions may have multiple answers.</li>
            <li className='mb-1'>Each question carries 10 Points.</li>
         
          </ol>
        </>
      )}
    </button>
  );
}

export default Rules;
