import React from 'react';
import { ChevronRight, Star, Heart, MessageCircle } from 'lucide-react';
import { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page, params?: { category?: string; productId?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const bannerSlides = [
    {
      id: 1,
      title: '爆款薯片买二送一',
      subtitle: '精选进口薯片，口感酥脆',
      image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      buttonText: '立即抢购'
    },
    {
      id: 2,
      title: '新口味坚果尝鲜价',
      subtitle: '健康美味，营养丰富',
      image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      buttonText: '立即品尝'
    },
    {
      id: 3,
      title: '网红零食新品上市',
      subtitle: '社交媒体爆款推荐',
      image: 'https://images.pexels.com/photos/3872433/pexels-photo-3872433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      buttonText: '发现更多'
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const categories = [
    { id: 'chips', name: '薯片', icon: '🥔', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'nuts', name: '坚果', icon: '🥜', color: 'bg-orange-100 text-orange-800' },
    { id: 'candy', name: '糖果', icon: '🍬', color: 'bg-pink-100 text-pink-800' },
    { id: 'cookies', name: '饼干', icon: '🍪', color: 'bg-amber-100 text-amber-800' },
    { id: 'jerky', name: '肉干', icon: '🥩', color: 'bg-red-100 text-red-800' },
    { id: 'chocolate', name: '巧克力', icon: '🍫', color: 'bg-purple-100 text-purple-800' }
  ];

  const hotProducts = [
    {
      id: '1',
      name: '乐事薯片经典原味',
      brand: '乐事',
      price: 12.9,
      originalPrice: 15.9,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '热销'
    },
    {
      id: '2',
      name: '混合坚果礼盒装',
      brand: '三只松鼠',
      price: 89.9,
      originalPrice: 99.9,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '新品'
    },
    {
      id: '3',
      name: '网红彩虹糖果',
      brand: '哈瑞宝',
      price: 24.9,
      originalPrice: 29.9,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '限时'
    },
    {
      id: '4',
      name: '奥利奥夹心饼干',
      brand: '奥利奥',
      price: 18.9,
      originalPrice: 22.9,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      tag: '经典'
    }
  ];

  const communityPosts = [
    {
      id: '1',
      title: '这款宝藏零食，我不允许还有人没吃过！',
      author: '零食小达人',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      content: '最近发现了一款超级好吃的进口薯片，口感层次丰富...',
      likes: 156,
      comments: 23,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: '2',
      title: '测评10款网红零食，哪款才是真的好吃？',
      author: '美食测评师',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      content: '花了一周时间，试吃了当下最火的10款网红零食...',
      likes: 234,
      comments: 45,
      image: 'https://images.pexels.com/photos/3872433/pexels-photo-3872433.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-orange-400 to-pink-400 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerSlides[currentSlide].image}
            alt={bannerSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              {bannerSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {bannerSlides[currentSlide].subtitle}
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors transform hover:scale-105">
              {bannerSlides[currentSlide].buttonText}
            </button>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">零食分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate('category', { category: category.id })}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <span className="font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Hot Products Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">热门推荐</h2>
            <button 
              onClick={() => onNavigate('category', { category: 'hot' })}
              className="flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              查看更多
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onNavigate('product', { productId: product.id })}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
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
                      'bg-blue-500 text-white'
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
                  <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
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
                    <button className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors">
                      加购物车
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">社区精选</h2>
            <button 
              onClick={() => onNavigate('community')}
              className="flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              进入社区
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => onNavigate('community')}
              >
                <div className="flex">
                  <div className="flex-1 p-6">
                    <div className="flex items-center mb-3">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="font-medium text-gray-700">{post.author}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.content}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};