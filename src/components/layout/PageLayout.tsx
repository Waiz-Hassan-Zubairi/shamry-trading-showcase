
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-16 dark:bg-background">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
