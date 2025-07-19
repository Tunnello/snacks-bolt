import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Plus, Minus, ChevronLeft } from 'lucide-react';
import { Page } from '../App';
import { useCart } from '../context/CartContext';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: Page, params?: { category?: string; productId?: string }) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const { addToCart } = useCart();

  const product = {
    id: productId,
    name: '乐事薯片经典原味',
    brand: '乐事',
    price: 12.9,
    originalPrice: 15.9,
    rating: 4.8,
    reviews: 1234,
    images: [
      'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1',
      'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1'
    ],
    weight: '70g',
    flavor: '原味',
    origin: '美国',
    ingredients: '马铃薯、植物油、盐、天然香料',
    shelfLife: '12个月',
    storage: '存放于阴凉干燥处',
    tag: '热销',
    description: '经典原味薯片，选用优质马铃薯制作，口感酥脆，味道纯正。采用独特工艺，保持每一片的完美形状和口感。',
    nutritionInfo: {
      energy: '536kcal/100g',
      protein: '6.6g/100g',
      fat: '35.5g/100g',
      carbohydrate: '49.2g/100g',
      sodium: '1.2g/100g'
    },
    features: [
      '无添加防腐剂',
      '非转基因马铃薯',
      '独立包装保鲜',
      '口感酥脆'
    ]
  };

  const reviews = [
    {
      id: '1',
      user: '美食达人小王',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      date: '2024-01-15',
      content: '味道很正宗，包装也很好，薯片很脆，没有破碎的，很满意！',
      images: ['https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'],
      helpful: 23
    },
    {
      id: '2',
      user: '零食爱好者',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 4,
      date: '2024-01-10',
      content: '经典口味，小时候的回忆。价格合理，会回购的。',
      images: [],
      helpful: 15
    },
    {
      id: '3',
      user: '购物小能手',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      date: '2024-01-08',
      content: '质量很好，物流很快，包装完整。推荐购买！',
      images: [],
      helpful: 8
    }
  ];

  const similarProducts = [
    {
      id: '2',
      name: '品客薯片番茄味',
      price: 18.9,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      rating: 4.6
    },
    {
      id: '7',
      name: '好丽友薯愿BBQ味',
      price: 15.9,
      image: 'https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      rating: 4.5
    },
    {
      id: '8',
      name: '上好佳洋葱圈',
      price: 8.9,
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      rating: 4.3
    },
    {
      id: '9',
      name: '可比克薯片原味',
      price: 11.9,
      image: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      rating: 4.4
    }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        brand: product.brand
      });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    onNavigate('cart');
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
          <button 
            onClick={() => onNavigate('category', { category: 'chips' })}
            className="hover:text-orange-600"
          >
            薯片
          </button>
          <span>/</span>
          <span className="text-gray-800 font-medium">{product.brand}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => onNavigate('category', { category: 'chips' })}
          className="flex items-center text-gray-600 hover:text-orange-600 mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          返回商品列表
        </button>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === selectedImage ? 'border-orange-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.brand} • {product.weight}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews}条评价)</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-orange-600">¥{product.price}</span>
                <span className="text-xl text-gray-400 line-through">¥{product.originalPrice}</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  省¥{(product.originalPrice - product.price).toFixed(1)}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">产品特色</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">商品描述</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-700">数量：</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-orange-100 text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-200 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    加入购物车
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    立即购买
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-6 pt-4">
                  <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5 mr-1" />
                    收藏
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                    <Share2 className="w-5 h-5 mr-1" />
                    分享
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t">
            <div className="flex space-x-8 px-8">
              {[
                { id: 'details', label: '商品详情' },
                { id: 'nutrition', label: '营养成分' },
                { id: 'reviews', label: '用户评价' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'details' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">基本信息</h3>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">品牌：</dt>
                          <dd className="font-medium">{product.brand}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">净含量：</dt>
                          <dd className="font-medium">{product.weight}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">口味：</dt>
                          <dd className="font-medium">{product.flavor}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">产地：</dt>
                          <dd className="font-medium">{product.origin}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">保质期：</dt>
                          <dd className="font-medium">{product.shelfLife}</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">配料表</h3>
                      <p className="text-gray-600">{product.ingredients}</p>
                      <h3 className="font-semibold text-gray-800 mb-3 mt-4">储存方式</h3>
                      <p className="text-gray-600">{product.storage}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'nutrition' && (
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">营养成分表</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-medium text-gray-700">营养成分</th>
                          <th className="text-right py-2 font-medium text-gray-700">每100g含量</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr>
                          <td className="py-2 text-gray-600">能量</td>
                          <td className="py-2 text-right font-medium">{product.nutritionInfo.energy}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">蛋白质</td>
                          <td className="py-2 text-right font-medium">{product.nutritionInfo.protein}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">脂肪</td>
                          <td className="py-2 text-right font-medium">{product.nutritionInfo.fat}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">碳水化合物</td>
                          <td className="py-2 text-right font-medium">{product.nutritionInfo.carbohydrate}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">钠</td>
                          <td className="py-2 text-right font-medium">{product.nutritionInfo.sodium}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">用户评价 ({product.reviews}条)</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{product.rating}</span>
                      </div>
                      <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                        <option>全部评价</option>
                        <option>好评</option>
                        <option>中评</option>
                        <option>差评</option>
                        <option>有图</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={review.avatar}
                            alt={review.user}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <span className="font-medium text-gray-800">{review.user}</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-gray-700 mb-3">{review.content}</p>
                            {review.images.length > 0 && (
                              <div className="flex space-x-2 mb-3">
                                {review.images.map((image, index) => (
                                  <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    className="w-20 h-20 object-cover rounded-lg"
                                  />
                                ))}
                              </div>
                            )}
                            <button className="text-sm text-gray-500 hover:text-orange-600">
                              有用 ({review.helpful})
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">相似商品推荐</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onNavigate('product', { productId: product.id })}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium text-gray-800 text-sm mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-600">¥{product.price}</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {product.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};