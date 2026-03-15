import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProductsPage from '@/pages/ProductsPage';
import QualityPage from '@/pages/QualityPage';
import ProductionPage from '@/pages/ProductionPage';
import PartnersPage from '@/pages/PartnersPage';
import ContactsPage from '@/pages/ContactsPage';

type Page = 'home' | 'about' | 'products' | 'quality' | 'production' | 'partners' | 'contacts';

interface PageProps {
  onNavigate: (page: string) => void;
}

const pageComponents: Record<Page, (props: PageProps) => JSX.Element> = {
  home: (props) => <HomePage {...props} />,
  about: (props) => <AboutPage {...props} />,
  products: (props) => <ProductsPage {...props} />,
  quality: (props) => <QualityPage {...props} />,
  production: (props) => <ProductionPage {...props} />,
  partners: (props) => <PartnersPage {...props} />,
  contacts: (props) => <ContactsPage {...props} />,
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    if (page in pageComponents) {
      setCurrentPage(page as Page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const PageComponent = pageComponents[currentPage];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar activePage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        <PageComponent onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
