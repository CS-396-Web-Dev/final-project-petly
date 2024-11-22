"use client";
import { useState } from 'react';
import { useAuth } from '@/ctx/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MobileContainer from '@/components/atoms/mobile-container/mobile-container';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      router.push('/home');
    } catch (err) {
      setError('Failed to create an account');
    }
  };

  return (
    <div className="mobile-wrapper">
      <MobileContainer>
        <div className="p-6 space-y-6">
          <header className="relative w-full text-center pt-4">
            <h2 className="text-xl font-semibold">Create Account</h2>
          </header>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Create account
            </button>
          </form>

          <div className="text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-indigo-600 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </MobileContainer>
    </div>
  );
}