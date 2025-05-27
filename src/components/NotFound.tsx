import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">Page Not Found</h2>
        <p className="text-gray-500 dark:text-gray-500 mb-8">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;