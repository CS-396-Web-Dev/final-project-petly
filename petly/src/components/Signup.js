"use client";
import { useState } from 'react';
import { useAuth } from '@/ctx/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MobileContainer from '@/components/atoms/mobile-container/mobile-container';
import TextBtn from '@/components/atoms/text-btn/text-btn';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signup(email, password);
      router.push('/new-user');
    } catch (err) {
      setError('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mobile-wrapper">
      <MobileContainer>
        <div className="relative w-full">
          <TextBtn text="close" />
          
          <div className="w-full flex flex-col items-center pt-16 px-6 animate-[fadeIn_0.6s_ease-out]">

            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-500 via-purple-500 to-fuchsia-500 p-[2px] mb-8">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                {/* PUT OUR LOGO HERE */}
                <span className="text-2xl">🐾</span>
              </div>
            </div>

            <h2 className="text-[#070707] font-['Inter'] text-2xl font-bold mb-2">
              Create account
            </h2>
            <p className="text-[#9098a3] font-['Inter'] text-sm mb-8">
              Start your virtual pet journey today
            </p>

            {error && (
              <div className="w-full max-w-[340px] bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm mb-6 animate-[slideIn_0.3s_ease-out]">
                {error}
              </div>
            )}

            <form className="w-full max-w-[340px] space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-purple-500 transition-all duration-200 outline-none font-['Inter'] text-sm placeholder:text-gray-400"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-purple-500 transition-all duration-200 outline-none font-['Inter'] text-sm placeholder:text-gray-400"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full relative py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl font-['Inter'] text-sm font-semibold 
                  hover:opacity-95 transition-all duration-200 
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600 before:to-fuchsia-600 before:rounded-xl before:transition-opacity before:opacity-0 before:hover:opacity-100
                  disabled:opacity-70 disabled:cursor-not-allowed
                  shadow-lg shadow-purple-500/20
                  group
                `}
              >
                <span className="relative">
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating account...
                    </div>
                  ) : 'Create account'}
                </span>
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="font-['Inter'] text-sm text-[#9098a3]">
                Already have an account?{' '}
                <Link 
                  href="/login" 
                  className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <p className="mt-8 font-['Inter'] text-xs text-[#9098a3] opacity-60">
              UID: 88bc0428-2c0a-48b1-953c-2e68ffa588d4
            </p>
          </div>
        </div>
      </MobileContainer>
    </div>
  );
}