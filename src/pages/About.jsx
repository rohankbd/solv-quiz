import { DesignComponent } from '../components';

const aboutDetails = [
  `Welcome to SOLV`,
  `We Are Still Under Development, But we will be back soon!!!`,

  `Regards  `,
  `MANOJ HEGDE `,
  `ROHAN KABADI`
];

function About() {
  return (
    <div className='about-page mx-auto flex w-[85%] animate-reveal flex-col items-center justify-center'>
      <h1 className='page-heading'>About Solv</h1>

      <div className='details text-justify font-medium text-darkText dark:text-dullWhite sm:w-[80%] sm:text-xl'>
        {aboutDetails.map((para, index2) => (
          <p className='my-6 indent-6' key={index2}>
            {para}
          </p>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className=' mt-8 inline-flex w-full items-center justify-center'>
        <hr className='my-8 h-1 w-64 rounded border-0 bg-darkViolet dark:bg-brightViolet' />
        <div className='absolute left-1/2 -translate-x-1/2 bg-lightBG px-4 dark:bg-darkBG'>
          <svg
            aria-hidden='true'
            className='h-5 w-5 text-gray-700 dark:text-gray-300'
            viewBox='0 0 24 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </div>
      <DesignComponent />
    </div>
  );
}

export default About;
