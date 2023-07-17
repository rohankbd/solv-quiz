import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successList = {
  'login-success': 'Welcome back Solvian!!   Happy to see you back!!',
  'logout-success': 'Hope to see you shortly!!  Have a good day!!!',
  'account-created': 'Congratulations!!!  Welcome to Solvian Troop!!',
  'mail-sent': 'Mail sent!',
  'username-updated': 'Name updated!',
  'profile-image-updated': 'Profile image updated!'
};

const errorList = {
  // Firebase errors
  'auth/wrong-password': 'Wrong password!',
  'auth/email-already-exists': 'Solvian with this Email-Id already exists!!',
  'auth/invalid-argument': 'Invalid argument!',
  'auth/invalid-display-name': 'Invalid display name!',
  'auth/invalid-password': 'Password should contain minimum 6 characters!',
  'auth/invalid-photo-url': 'Invalid image details',
  'auth/invalid-uid': 'Invalid user ID!',
  'auth/missing-uid': 'User ID is missing!',
  'auth/phone-number-already-exists': 'Solvian with this Phone Number already exists!!',
  'auth/email-already-in-use': 'Solvian with this Email-Id already exists!!',
  'auth/uid-already-exists': 'Solvian with this User Id already exists!!',
  'auth/code-expired': 'The SMS code has expired!',
  'auth/expired-action-code': 'The action code has expired.',
  'auth/invalid-verification-code': 'Verification code is invalid!',
  'auth/missing-phone-number': 'Phone number is missing!',
  'auth/too-many-requests': 'Too many requests!',
  'auth/unverified-email': 'The operation requires a verified email.',
  'auth/user-not-found': 'User not found!',
  'auth/weak-password': 'The password should contain at least 6 characters!',
  'auth/timeout': 'The operation has timed out.',
  'auth/user-disabled':
    'The user account has been disabled by the administrator.',
  'auth/user-mismatch': 'User not matching!',

  // Custom error
  'password-no-match': "oh no!! Your password isn't matching",
  'login-needed': "Login first to become Solvian!"
};

export default function showAlert(type = '', msg = '') {
  if (type === 'success') {
    const message = successList[msg];

    if (!message) {
      toast.success('Success!', {
        position: 'top-left',
        theme: 'colored'
      });
    }
    // toast.success('Success!');
    else {
      toast.success(message, {
        position: 'top-left',
        theme: 'colored'
      });
    }
    // toast.success(message);
  }

  if (type === 'error') {
    const message = errorList[msg];

    if (!message) {
      toast.error('Error occurred!', {
        position: 'top-left',
        theme: 'colored'
      });
    } else {
      toast.error(message, {
        position: 'top-left',
        theme: 'colored'
      });
    }
  }
}
