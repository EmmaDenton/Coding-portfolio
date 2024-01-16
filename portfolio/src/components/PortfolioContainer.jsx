import { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage !== 'About' && <Header currentPage={currentPage} />}
      {currentPage !== 'About' && <Footer />}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
