import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CommunityPage } from './pages/CommunityPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

export type Page = 'home' | 'category' | 'product' | 'community' | 'cart' | 'account';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  const navigateTo = (page: Page, params?: { category?: string; productId?: string }) => {
    setCurrentPage(page);
    if (params?.category) setSelectedCategory(params.category);
    if (params?.productId) setSelectedProductId(params.productId);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'category':
        return <CategoryPage category={selectedCategory} onNavigate={navigateTo} />;
      case 'product':
        return <ProductDetailPage productId={selectedProductId} onNavigate={navigateTo} />;
      case 'community':
        return <CommunityPage onNavigate={navigateTo} />;
      case 'cart':
        return <ShoppingCartPage onNavigate={navigateTo} />;
      case 'account':
        return <MyAccountPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <UserProvider>
      <CartProvider>
        <div className="min-h-screen bg-orange-50">
          <Header currentPage={currentPage} onNavigate={navigateTo} />
          <main className="pt-16">
            {renderCurrentPage()}
          </main>
        </div>
      </CartProvider>
    </UserProvider>
  );
}

export default App;