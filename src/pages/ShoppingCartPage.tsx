import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Page } from '../App';
import { useCart } from '../context/CartContext';

interface ShoppingCartPageProps {
  onNavigate: (page: Page) => void;
}

export const ShoppingCartPage: React.FC<ShoppingCartPageProps> = ({ onNavigate }) => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [selectedItems, setSelectedItems] = useState<string[]>(items.map(item => item.id));
  
  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(item => item.id));
    }
  };

  const handleSelectItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleDeleteSelected = () => {
    selectedItems.forEach(itemId => {
      removeFromCart(itemId);
    });
    setSelectedItems([]);
  };

  const getSelectedTotal = () => {
    return items
      .filter(item => selectedItems.includes(item.id))
      .reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getSelectedItemsCount = () => {
    return items
      .filter(item => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.quantity, 0);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">购物车是空的</h2>
            <p className="text-gray-600 mb-8">快去选购你喜欢的零食吧！</p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              去购物
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center text-gray-600 hover:text-orange-600 transition-colors mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              继续购物
            </button>
            <h1 className="text-2xl font-bold text-gray-800">购物车</h1>
            <span className="ml-2 text-gray-500">({items.length}件商品)</span>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              清空购物车
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Toolbar */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.length === items.length && items.length > 0}
                        onChange={handleSelectAll}
                        className="text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700">全选</span>
                    </label>
                    {selectedItems.length > 0 && (
                      <button
                        onClick={handleDeleteSelected}
                        className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
                      >
                        删除选中({selectedItems.length})
                      </button>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    已选择 {selectedItems.length} / {items.length} 件商品
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-4">
                    <div className="flex items-center space-x-4">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="text-orange-500 focus:ring-orange-500"
                      />

                      {/* Product Image */}
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.brand}</p>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="font-semibold text-orange-600">¥{item.price}</div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right w-20">
                        <div className="font-semibold text-gray-800">
                          ¥{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-gray-800 mb-4">结算信息</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">选中商品({getSelectedItemsCount()}件)：</span>
                  <span className="font-medium">¥{getSelectedTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">运费：</span>
                  <span className="font-medium text-green-600">免费</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">优惠：</span>
                  <span className="font-medium text-green-600">-¥0.00</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">应付总额：</span>
                    <span className="text-xl font-bold text-orange-600">
                      ¥{getSelectedTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  disabled={selectedItems.length === 0}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    selectedItems.length > 0
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  去结算({selectedItems.length})
                </button>
                <button
                  onClick={() => onNavigate('home')}
                  className="w-full py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition-colors"
                >
                  继续购物
                </button>
              </div>

              {/* Promotions */}
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-800 mb-2">优惠提示</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• 满99元免运费</li>
                  <li>• 新用户首单9折</li>
                  <li>• 部分商品买二送一</li>
                </ul>
              </div>

              {/* Recently Viewed */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-3">最近浏览</h4>
                <div className="space-y-2">
                  {[
                    {
                      id: '10',
                      name: '品客薯片番茄味',
                      price: 18.9,
                      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
                    },
                    {
                      id: '11',
                      name: '奥利奥夹心饼干',
                      price: 18.9,
                      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
                    }
                  ].map((product) => (
                    <div key={product.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800 truncate">
                          {product.name}
                        </div>
                        <div className="text-sm text-orange-600 font-medium">
                          ¥{product.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};