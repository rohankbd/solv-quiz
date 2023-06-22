import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import showAlert from '../AlertList';
import CheckBox from '../elements/CheckBox';
import Form from '../elements/Form';
import TextInput from '../elements/TextInput';

function SignUpForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [consent, setConsent] = useState('');
  const [loading, setLoading] = useState('');

  const [show, setShow] = useState(false);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      showAlert('error', 'password-no-match');
      return;
    }
    try {
      setLoading(true);
      document.body.style.cursor = 'wait';
      await signUp(email, password, userName);
      document.body.style.cursor = 'default';
      showAlert('success', 'account-created');
      <Link to='/Home'>
      </Link>
    } catch (err) {
      setLoading(false);
      document.body.style.cursor = 'default';
      showAlert('error', err.code);
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Form className='signup gap-4' onSubmit={handleSubmit}>
      <TextInput
        type='text'
        required
        placeholder='Enter Your Name'
        icon='person'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextInput
        type='email'
        required
        placeholder='Enter Email ID'
        icon='mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className='text-input flex h-14 w-full items-center rounded-md border border-dullWhite bg-white p-2 outline-none dark:border-gray-600 dark:bg-darkText/60'>
        <input
          className='ml-1 w-full rounded-lg border-none bg-transparent font-medium tracking-wide text-darkText outline-none dark:text-lightText lg:text-xl'
          type={show ? 'text' : 'password'}
          required
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='material-icons-outlined mx-1 flex cursor-pointer items-center justify-center text-darkText dark:text-lightText md:text-3xl'
          type='button'
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? 'visibility_off' : 'visibility'}
        </button>
      </div>

      <TextInput
        type='password'
        required
        placeholder='Confirm Password'
        icon='lock'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        className='my-2 mx-auto flex items-center justify-center text-sm font-medium tracking-wide text-darkText dark:text-lightText sm:text-base'
        text='I agree to the Terms &amp; Conditions'
        required
        value={consent}
        onChange={(e) => setConsent(e.target.value)}
      />

      <button className='signup fill-button' type='submit' disabled={loading}>
        Sign Up
      </button>

      <div className='user-login -mt-1 text-center text-sm font-medium tracking-wide text-darkText dark:text-slate-300 md:text-base'>
        Already have an account?{' '}
        <span className='inline-block'>
          <Link to='/login'>
            {' '}
            <span className='link-text'>Login</span>
          </Link>{' '}
          instead.
        </span>
      </div>
    </Form>
  );
}

export default SignUpForm;
