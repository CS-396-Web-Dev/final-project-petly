"use client";
import Link from 'next/link';

export default function RootPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Petly</h1>
        <div className="space-y-4">
          <Link
            href="/login"
            className="w-full inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="w-full inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}