
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-[10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[8rem]" />
          <div className="absolute bottom-20 right-[10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full blur-[8rem]" />
        </div>
      </div>
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
