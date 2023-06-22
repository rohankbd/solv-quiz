import { Link } from 'react-router-dom';
import { logo } from '../assets';

function Footer() {
  return (
    <footer className='w-full #FEBE10/50 p-4 dark:#FEBE10/50 sm:px-14 sm:py-6'>
      <div className='md:mr-10 md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <Link to='/' className='flex items-center'>
            <img
              src={logo}
              className='mr-2 h-8 rounded-full bg-white'
              alt='Quizzy Logo'
            />
            <span className='self-center whitespace-nowrap text-2xl font-semibold text-darkText dark:text-lightText'>
              SOLV
            </span>
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
          <div>
            
            <ul className='text-darkText dark:text-lightText'>
              <li className='mb-4'>
                <Link to='quizzes' className='hover:underline'>
                  Quizzes
                </Link>
              </li>
              
            </ul>
          </div>
         
        
        </div>
      </div>
      <hr className='my-6 border-darkText dark:border-lightText sm:mx-auto lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between md:mx-10'>
        <span className='text-sm text-darkText dark:text-lightText sm:text-center'>
          © 2023{' '}
          <Link to='/' className='hover:underline'>
            SOLV
          </Link>
          .&ensp; All Rights Reserved.
        </span>
        
      </div>
    </footer>
  );
}

export default Footer;
