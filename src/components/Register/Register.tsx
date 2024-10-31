import { useState } from 'react';

import { Button } from '@components/Button/Button';

import { registerUser } from '@api/requests';

import styles from './Register.module.scss';
import { RegisterProps } from './Register.types';

export const Register: React.FC<RegisterProps> = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onSubmitRegister = () => {
    registerUser(email, password, name).then((user) => {
      if (user.id) {
        loadUser(user);
        onRouteChange('home');
      }
    });
  };

  return (
    <article className={styles.wrapper}>
      <div className={styles.registerBox}>
        <fieldset id='sign_up' className={styles.fieldset}>
          <legend className={styles.legend}>Register</legend>
          <div className={styles.inputWrapper}>
            <label htmlFor='name' className={styles.label}>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              onChange={onNameChange}
              className={styles.input}
              autoComplete='off'
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='email-address' className={styles.label}>
              Email
            </label>
            <input
              type='email'
              name='email-address'
              id='email-address'
              onChange={onEmailChange}
              className={styles.input}
              autoComplete='off'
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='password' className={styles.label}>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={onPasswordChange}
              className={styles.input}
              autoComplete='off'
            />
          </div>
        </fieldset>
        <div className={styles.passwordRequirementsWrapper}>
          <p className={styles.passwordRequirementsTitle}>Password requirements:</p>
          <ul className={styles.passwordRequirementsList}>
            <li>At least 8 characters long</li>
            <li>At least one digit</li>
            <li>At least one lowercase letter</li>
            <li>At least one uppercase letter</li>
            <li>At least one special character</li>
          </ul>
        </div>
        <div>
          <Button onClick={onSubmitRegister} type='submit'>
            Register
          </Button>
        </div>
      </div>
    </article>
  );
};
