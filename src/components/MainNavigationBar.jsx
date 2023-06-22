import { Link, Outlet } from 'react-router-dom';
import { logo } from '../assets';
import { AuthenticationComponent, SubNavigationBar, SwitchTheme } from './';

function MainNavigationBar() {
  return (
    <>
      <nav className='navigation-bar fixed z-10 grid grid-cols-[auto_1fr_auto_auto] items-center justify-between py-2 px-4 md:px-20'style={{color:'#FEBE10'}}>
        <ul className='flex items-center justify-between'style={{color:'#FEBE10'}}>
          <li>
            <Link to='/' className='branding flex items-center justify-center'>
              <img className='mr-2 w-9 xl:w-11' src={logo} alt='Quizzy' />
              <h3 className='block text-xl font-bold uppercase leading-5 tracking-wider dark:text-brightViolet sm:text-2xl' >
                Solv
              </h3>
            </Link>
          </li>
        </ul>
        <SubNavigationBar className='pc-page-menu mr-4 hidden justify-end xl:flex' />
        <AuthenticationComponent />
        <SwitchTheme />
      </nav>
      <SubNavigationBar className='navigation-bar mobile-page-menu absolute mt-14 flex justify-center py-2 pt-3 xl:hidden' />
      <Outlet />
    </>
  );
}

export default MainNavigationBar;
