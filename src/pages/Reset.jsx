import { reset } from '../assets';
import { DesignComponent, ResetPasswordForm } from '../components';

function Reset() {
  return (
    <div className='reset mx-auto w-[85%] animate-reveal'>
      <h1 className='page-heading'>Reset Password!</h1>
      <div className='responsive gap-16'>
        <div className='signup-image hidden items-center justify-center pb-8 lg:flex '>
          <img
            className='mt-5 w-full justify-self-center lg:max-w-[75%]'
            src={reset}
            height={500}
            width={500}
            alt='Sign Up'
          />
        </div>
        <div className='frame-BG mx-4'>
          <ResetPasswordForm />
        </div>
      </div>
      <DesignComponent />
    </div>
  );
}

export default Reset;
