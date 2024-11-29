import Link from 'next/link';
import MobileContainer from '@/components/atoms/mobile-container/mobile-container';

export default function RootPage() {
  return (
    <div className="mobile-wrapper">
      <MobileContainer>
        <div className="w-full h-full flex flex-col items-center justify-center p-6 animate-[fadeIn_0.6s_ease-out]">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-violet-500 via-purple-500 to-fuchsia-500 p-[2px] mb-8">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center">
                <span className="text-4xl transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                  🐾
                </span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4 mb-12">
            <h1 className="text-[#070707] font-['Inter'] text-3xl font-bold">
              Welcome to Petly
            </h1>
            <p className="text-[#9098a3] font-['Inter'] text-sm max-w-[280px]">
              Your virtual companion awaits. Begin your journey today.
            </p>
          </div>
          
          <div className="w-full max-w-[340px] space-y-4">
            <Link
              href="/login"
              className={`
                block w-full py-4 rounded-xl font-['Inter'] text-sm font-semibold text-center
                bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white
                hover:opacity-95 transition-all duration-200
                shadow-lg shadow-purple-500/20
                relative overflow-hidden
                group
              `}
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            <Link
              href="/signup"
              className={`
                block w-full py-4 rounded-xl font-['Inter'] text-sm font-semibold text-center
                bg-white border-2 border-gray-100
                hover:border-purple-500 hover:text-purple-600
                transition-all duration-200
                relative
                group
              `}
            >
              <span className="relative z-10">Create Account</span>
            </Link>
          </div>

          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-full blur-xl"></div>

          <p className="absolute bottom-8 text-center font-['Inter'] text-xs text-[#9098a3] opacity-60">
            Version 1.0.0
          </p>
        </div>
      </MobileContainer>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[40%] -right-[20%] w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}