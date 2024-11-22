"use client";
import Link from 'next/link';
import MobileContainer from '@/components/atoms/mobile-container/mobile-container';

export default function RootPage() {
  return (
    <div className="mobile-wrapper">
      <MobileContainer>
        <div className="h-full flex flex-col items-center justify-center p-6 space-y-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to Petly</h1>
          <div className="w-full space-y-4">
            <Link
              href="/login"
              className="block w-full py-3 text-center bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block w-full py-3 text-center bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </MobileContainer>
    </div>
  );
}