'use client';
import React from 'react';
import signUp from '../firebase/auth/signup';
import { useRouter } from 'next/navigation';
import addData from '../firebase/firestore/addData';

function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    try {
      const { result: signInResult, error: signInError } = await signUp(
        email,
        password
      );
      if (signInError) {
        console.error(signInError);
      }
      console.log(signInResult);
      const data = {
        name: 'John snow',
        house: 'Stark',
      };
      const { result: addDataResult, error: addDataError } = await addData(
        'users',
        signInResult.user.uid,
        data
      );
      if (addDataError) {
        return console.log(addDataError);
      }
      router.push('/admin');
      console.log(addDataResult);
    } catch (error) {
      console.error('Error', error);
    }

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/admin');
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
