import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/login/google";
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-md flex items-center mb-10">
        <button aria-label="Go back" className="text-black text-lg">
          <i className="fas fa-arrow-left"></i>
        </button>
      </header>
      
      <main className="w-full max-w-md flex flex-col items-center">
        <img
          alt="Green graduation cap icon" 
          className="mb-6" 
          decoding="async" 
          height="48" 
          loading="lazy" 
          src="src/assets/Logo.png" 
          width="48"
        />
        
        <h1 className="text-center text-black text-xl font-medium mb-1">
          Welcome to TestYourself
        </h1>
        <button
          onClick={handleGoogleLogin}
          className="w-full max-w-xs mt-4 flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Login with Google
        </button>
        
        <p className="mt-4 text-center text-xs text-gray-600 max-w-xs">
          Proceeding means you've agreed to our
          <a className="text-emerald-600 underline" href="#">
            {' terms & conditions'}
          </a>
        </p>
      </main>
    </div>
  );
};

export default Login;