import React, { useState } from 'react';
import { Filter, Grid, List, Star, Heart } from 'lucide-react';
import { Page } from '../App';
import { useCart } from '../context/CartContext';

interface CategoryPageProps {
  category: string;
  onNavigate: (page: Page, params?: { productId?: string }) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ category, onNavigate }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const { addToCart } = useCart();

  const categoryNames = {
    chips: '薯片',
    nuts: '坚果',
    candy: '糖果',
    cookies: '饼干',
    jerky: '肉干',
    chocolate: '巧克力',
    hot: '热门商品'
  };

  const products = [
    {
      id: '1',
      name: '乐事薯片经典原味',
      brand: '乐事',
      price: 12.9,
      originalPrice: 15.9,
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '热销',
      weight: '70g',
      flavor: '原味',
      imported: false
    },
    {
      id: '2',
      name: '品客薯片番茄味',
      brand: '品客',
      price: 18.9,
      originalPrice: 22.9,
      rating: 4.6,
      reviews: 856,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '进口',
      weight: '110g',
      flavor: '番茄',
      imported: true
    },
    {
      id: '3',
      name: '混合坚果礼盒装',
      brand: '三只松鼠',
      price: 89.9,
      originalPrice: 99.9,
      rating: 4.9,
      reviews: 2341,
      image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '新品',
      weight: '500g',
      flavor: '混合',
      imported: false
    },
    {
      id: '4',
      name: '网红彩虹糖果',
      brand: '哈瑞宝',
      price: 24.9,
      originalPrice: 29.9,
      rating: 4.7,
      reviews: 567,
      image: 'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '限时',
      weight: '200g',
      flavor: '水果',
      imported: true
    },
    {
      id: '5',
      name: '奥利奥夹心饼干',
      brand: '奥利奥',
      price: 18.9,
      originalPrice: 22.9,
      rating: 4.6,
      reviews: 1876,
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '经典',
      weight: '300g',
      flavor: '奶油',
      imported: false
    },
    {
      id: '6',
      name: '费列罗榛果威化',
      brand: '费列罗',
      price: 68.9,
      originalPrice: 78.9,
      rating: 4.8,
      reviews: 923,
      image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '进口',
      weight: '375g',
      flavor: '榛果',
      imported: true
    }
  ];

  const brands = ['乐事', '品客', '三只松鼠', '哈瑞宝', '奥利奥', '费列罗'];
  const flavors = ['原味', '番茄', '混合', '水果', '奶油', '榛果'];

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleFlavorToggle = (flavor: string) => {
    setSelectedFlavors(prev => 
      prev.includes(flavor) 
        ? prev.filter(f => f !== flavor)
        : [...prev, flavor]
    );
  };

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-orange-600"
          >
            首页
          </button>
          <span>/</span>
          <span className="text-gray-800 font-medium">
            {categoryNames[category as keyof typeof categoryNames] || '商品分类'}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="font-semibold text-gray-800">筛选条件</h3>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">价格区间</h4>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: '全部价格' },
                    { value: '0-10', label: '0-10元' },
                    { value: '10-30', label: '10-30元' },
                    { value: '30-50', label: '30-50元' },
                    { value: '50+', label: '50元以上' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={option.value}
                        checked={priceRange === option.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">品牌</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Flavors */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">口味</h4>
                <div className="space-y-2">
                  {flavors.map((flavor) => (
                    <label key={flavor} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFlavors.includes(flavor)}
                        onChange={() => handleFlavorToggle(flavor)}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {flavor}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Import Status */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3">产地</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="text-orange-500 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      进口商品
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="text-orange-500 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      国产商品
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    共找到 {products.length} 件商品
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="popularity">按人气排序</option>
                    <option value="price-low">价格从低到高</option>
                    <option value="price-high">价格从高到低</option>
                    <option value="newest">最新上架</option>
                    <option value="rating">评分最高</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md ${
                      viewMode === 'grid'
                        ? 'bg-orange-100 text-orange-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md ${
                      viewMode === 'list'
                        ? 'bg-orange-100 text-orange-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onNavigate('product', { productId: product.id })}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          product.tag === '热销' ? 'bg-red-500 text-white' :
                          product.tag === '新品' ? 'bg-green-500 text-white' :
                          product.tag === '限时' ? 'bg-orange-500 text-white' :
                          product.tag === '进口' ? 'bg-blue-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                          {product.tag}
                        </span>
                      </div>
                      <button className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{product.brand} • {product.weight}</p>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-orange-600">
                            ¥{product.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ¥{product.originalPrice}
                          </span>
                        </div>
                        <button 
                          onClick={(e) => handleAddToCart(product, e)}
                          className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors"
                        >
                          加购物车
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onNavigate('product', { productId: product.id })}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer p-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute -top-1 -left-1">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            product.tag === '热销' ? 'bg-red-500 text-white' :
                            product.tag === '新品' ? 'bg-green-500 text-white' :
                            product.tag === '限时' ? 'bg-orange-500 text-white' :
                            product.tag === '进口' ? 'bg-blue-500 text-white' :
                            'bg-purple-500 text-white'
                          }`}>
                            {product.tag}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {product.brand} • {product.weight} • {product.flavor}味
                        </p>
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">({product.reviews}条评价)</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-orange-600">
                            ¥{product.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ¥{product.originalPrice}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={(e) => handleAddToCart(product, e)}
                            className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition-colors"
                          >
                            加购物车
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                  上一页
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${
                      page === 1
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                  下一页
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};