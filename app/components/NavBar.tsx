'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import AuthModal from './AuthModal';
import { AuthenticationContext } from '../context/AuthContext';
import useAuth from '@/hooks/useAuth';

const NavBar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div className='flex'>
        {loading ? null : data ? (
          <button className="bg-blue-400 text-white border p-1 px-4 rounded" onClick={signout}>
            Sign out
          </button>
        ) : (
          <>
            <AuthModal isSignIn={true} />
            <AuthModal isSignIn={false} />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
