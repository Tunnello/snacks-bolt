import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Page } from '../App';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page, params?: { category?: string }) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();

  const categories = [
    { id: 'chips', name: '薯片', icon: '🥔' },
    { id: 'nuts', name: '坚果', icon: '🥜' },
    { id: 'candy', name: '糖果', icon: '🍬' },
    { id: 'cookies', name: '饼干', icon: '🍪' },
    { id: 'jerky', name: '肉干', icon: '🥩' },
    { id: 'chocolate', name: '巧克力', icon: '🍫' }
  ];

  const hotSearches = ['网红零食', '低卡零食', '进口零食', '无添加', '坚果礼盒'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
              零
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">零食乐园</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              首页
            </button>
            
            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors">
                零食分类
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => onNavigate('category', { category: category.id })}
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-orange-50 transition-colors"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('community')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'community' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              社区
            </button>

            <button
              onClick={() => onNavigate('account')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'account' 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              我的
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="搜索零食、品牌..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              {searchQuery === '' && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="text-xs text-gray-500 mb-2">热门搜索</div>
                  <div className="flex flex-wrap gap-2">
                    {hotSearches.map((term) => (
                      <span
                        key={term}
                        className="px-2 py-1 bg-orange-50 text-orange-600 rounded-md text-xs cursor-pointer hover:bg-orange-100 transition-colors"
                        onClick={() => setSearchQuery(term)}
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Cart and User Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate('account')}
              className="hidden md:flex items-center space-x-1 p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <User className="w-6 h-6" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
              >
                首页
              </button>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">零食分类</div>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        onNavigate('category', { category: category.id });
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-orange-50 transition-colors"
                    >
                      <span>{category.icon}</span>
                      <span className="text-sm font-medium text-gray-600">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  onNavigate('community');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
              >
                社区
              </button>
              <button
                onClick={() => {
                  onNavigate('account');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
              >
                我的
      </button>
            </div>
            
            {/* Mobile Search */}
            <div className="mt-4 px-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索零食、品牌..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};