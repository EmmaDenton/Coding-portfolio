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
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      case 'Home':
        return <About />;
      default:
        return <div>Page not found</div>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage !== 'About' && currentPage !== 'Home' && <Header currentPage={currentPage} />}
      <main className="mx-3">{renderPage()}</main>
      {currentPage !== 'About' && currentPage !== 'Home' && <Footer />}
    </div>
  );
}
