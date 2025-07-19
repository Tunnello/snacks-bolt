import React, { useState } from 'react';
import { User, Package, Heart, MessageCircle, Settings, ChevronRight, Star, Truck, CreditCard } from 'lucide-react';
import { Page } from '../App';
import { useUser } from '../context/UserContext';

interface MyAccountPageProps {
  onNavigate: (page: Page) => void;
}

export const MyAccountPage: React.FC<MyAccountPageProps> = ({ onNavigate }) => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  const orderStats = {
    pending: 2,
    shipped: 1,
    delivered: 12,
    total: 25
  };

  const recentOrders = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      status: '已送达',
      total: 89.7,
      items: [
        {
          name: '乐事薯片经典原味',
          image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          quantity: 3
        },
        {
          name: '混合坚果礼盒装',
          image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          quantity: 1
        }
      ]
    },
    {
      id: 'ORD002',
      date: '2024-01-12',
      status: '配送中',
      total: 45.8,
      items: [
        {
          name: '奥利奥夹心饼干',
          image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          quantity: 2
        }
      ]
    }
  ];

  const favorites = [
    {
      id: '1',
      name: '乐事薯片经典原味',
      price: 12.9,
      image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      inStock: true
    },
    {
      id: '2',
      name: '混合坚果礼盒装',
      price: 89.9,
      image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      inStock: true
    },
    {
      id: '3',
      name: '费列罗榛果威化',
      price: 68.9,
      image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      inStock: false
    }
  ];

  const myReviews = [
    {
      id: '1',
      productName: '乐事薯片经典原味',
      rating: 5,
      content: '味道很正宗，包装也很好，薯片很脆，没有破碎的，很满意！',
      date: '2024-01-10',
      helpful: 23,
      image: 'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: '2',
      productName: '混合坚果礼盒装',
      rating: 4,
      content: '坚果很新鲜，包装精美，送礼自用都很好。价格稍贵但物有所值。',
      date: '2024-01-08',
      helpful: 15,
      image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-4">请先登录</h2>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            立即登录
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-sm text-orange-600">{user.memberLevel}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-gray-800">{orderStats.total}</div>
                  <div className="text-sm text-gray-600">总订单</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">{favorites.length}</div>
                  <div className="text-sm text-gray-600">收藏</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-lg shadow-sm">
              <nav className="space-y-1">
                {[
                  { id: 'overview', label: '账户概览', icon: User },
                  { id: 'orders', label: '我的订单', icon: Package },
                  { id: 'favorites', label: '收藏夹', icon: Heart },
                  { id: 'reviews', label: '我的评价', icon: MessageCircle },
                  { id: 'settings', label: '设置', icon: Settings }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-500'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{orderStats.pending}</div>
                    <div className="text-sm text-gray-600">待付款</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Truck className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{orderStats.shipped}</div>
                    <div className="text-sm text-gray-600">待收货</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{orderStats.delivered}</div>
                    <div className="text-sm text-gray-600">待评价</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">¥1,234</div>
                    <div className="text-sm text-gray-600">累计消费</div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800">最近订单</h3>
                      <button
                        onClick={() => setActiveTab('orders')}
                        className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                      >
                        查看全部
                      </button>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {recentOrders.slice(0, 3).map((order) => (
                      <div key={order.id} className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <span className="font-medium text-gray-800">订单号: {order.id}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === '已送达' ? 'bg-green-100 text-green-700' :
                              order.status === '配送中' ? 'bg-blue-100 text-blue-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">{order.date}</span>
                        </div>
                        <div className="flex items-center space-x-4 mb-3">
                          {order.items.map((item, index) => (
                            <img
                              key={index}
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                          ))}
                          {order.items.length > 3 && (
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-500">
                              +{order.items.length - 3}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            共{order.items.reduce((sum, item) => sum + item.quantity, 0)}件商品
                          </span>
                          <span className="font-semibold text-gray-800">¥{order.total}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">我的订单</h3>
                </div>
                <div className="p-6">
                  <div className="flex space-x-6 mb-6">
                    {[
                      { label: '全部订单', count: orderStats.total },
                      { label: '待付款', count: orderStats.pending },
                      { label: '待收货', count: orderStats.shipped },
                      { label: '待评价', count: orderStats.delivered }
                    ].map((tab, index) => (
                      <button
                        key={index}
                        className={`pb-2 border-b-2 transition-colors ${
                          index === 0
                            ? 'border-orange-500 text-orange-600'
                            : 'border-transparent text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        {tab.label} ({tab.count})
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <span className="font-medium text-gray-800">订单号: {order.id}</span>
                            <span className="text-sm text-gray-500">{order.date}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.status === '已送达' ? 'bg-green-100 text-green-700' :
                            order.status === '配送中' ? 'bg-blue-100 text-blue-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800">{item.name}</h4>
                                <p className="text-sm text-gray-600">数量: {item.quantity}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                          <span className="font-semibold text-gray-800">总计: ¥{order.total}</span>
                          <div className="space-x-2">
                            {order.status === '配送中' && (
                              <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                                查看物流
                              </button>
                            )}
                            {order.status === '已送达' && (
                              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                                评价商品
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">我的收藏 ({favorites.length})</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-medium text-gray-800 mb-2">{item.name}</h4>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-orange-600">¥{item.price}</span>
                            <span className={`text-sm ${
                              item.inStock ? 'text-green-600' : 'text-red-500'
                            }`}>
                              {item.inStock ? '有库存' : '缺货'}
                            </span>
                          </div>
                          <div className="flex space-x-2 mt-3">
                            <button
                              disabled={!item.inStock}
                              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                                item.inStock
                                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              }`}
                            >
                              加入购物车
                            </button>
                            <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                              移除
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">我的评价 ({myReviews.length})</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {myReviews.map((review) => (
                    <div key={review.id} className="p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.image}
                          alt={review.productName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 mb-2">{review.productName}</h4>
                          <div className="flex items-center space-x-4 mb-2">
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
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>有用 ({review.helpful})</span>
                            <button className="text-orange-600 hover:text-orange-700">编辑</button>
                            <button className="text-red-500 hover:text-red-600">删除</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">个人信息</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          用户名
                        </label>
                        <input
                          type="text"
                          value={user.name}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          邮箱
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      保存更改
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">通知设置</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {[
                      { label: '订单状态通知', description: '接收订单状态变更通知' },
                      { label: '促销活动通知', description: '接收优惠活动和新品推荐' },
                      { label: '社区互动通知', description: '接收评论和点赞通知' }
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-800">{setting.label}</div>
                          <div className="text-sm text-gray-600">{setting.description}</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};