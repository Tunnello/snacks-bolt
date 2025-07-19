import React, { useState } from 'react';
import { Plus, Heart, MessageCircle, Share2, TrendingUp, Clock, Star } from 'lucide-react';
import { Page } from '../App';

interface CommunityPageProps {
  onNavigate: (page: Page) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('hot');
  const [showCreatePost, setShowCreatePost] = useState(false);

  const posts = [
    {
      id: '1',
      title: '这款宝藏零食，我不允许还有人没吃过！',
      content: '最近发现了一款超级好吃的进口薯片，口感层次丰富，每一口都是惊喜。包装也很精美，送人自用都很棒。强烈推荐给大家！',
      author: {
        name: '零食小达人',
        avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        level: '美食达人'
      },
      images: [
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
        'https://images.pexels.com/photos/1586942/pexels-photo-1586942.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
      ],
      likes: 156,
      comments: 23,
      shares: 12,
      time: '2小时前',
      tags: ['薯片', '进口零食', '推荐'],
      isLiked: false,
      isHot: true
    },
    {
      id: '2',
      title: '测评10款网红零食，哪款才是真的好吃？',
      content: '花了一周时间，试吃了当下最火的10款网红零食，从口感、包装、性价比三个维度进行了详细测评。结果可能会颠覆你的认知！',
      author: {
        name: '美食测评师',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        level: '专业测评'
      },
      images: [
        'https://images.pexels.com/photos/3872433/pexels-photo-3872433.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
      ],
      likes: 234,
      comments: 45,
      shares: 28,
      time: '5小时前',
      tags: ['测评', '网红零食', '排行榜'],
      isLiked: true,
      isHot: true
    },
    {
      id: '3',
      title: '健康零食大盘点，好吃不胖的秘密！',
      content: '作为一个资深零食爱好者兼营养师，今天分享一些既满足口腹之欲又不会带来负担的健康零食选择。每一款都是精心挑选，营养成分分析详细。',
      author: {
        name: '营养师小姐姐',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        level: '健康专家'
      },
      images: [
        'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
        'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
      ],
      likes: 89,
      comments: 12,
      shares: 6,
      time: '1天前',
      tags: ['健康零食', '营养', '减脂'],
      isLiked: false,
      isHot: false
    },
    {
      id: '4',
      title: '童年回忆杀！那些年我们一起吃过的零食',
      content: '90后的童年零食回忆，从5毛钱的辣条到1块钱的干脆面，每一样都承载着满满的回忆。哪一款是你的最爱？',
      author: {
        name: '怀旧控',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
        level: '回忆收藏家'
      },
      images: [
        'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
      ],
      likes: 178,
      comments: 67,
      shares: 15,
      time: '2天前',
      tags: ['童年回忆', '怀旧', '经典零食'],
      isLiked: false,
      isHot: false
    }
  ];

  const trendingTopics = [
    { name: '#新品零食', count: '12.3万讨论' },
    { name: '#健康零食', count: '8.7万讨论' },
    { name: '#进口零食', count: '6.2万讨论' },
    { name: '#童年回忆', count: '5.8万讨论' },
    { name: '#零食测评', count: '4.9万讨论' }
  ];

  const handleLike = (postId: string) => {
    // 实际应用中这里会调用API
    console.log('点赞帖子:', postId);
  };

  const handleCreatePost = () => {
    setShowCreatePost(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-800">零食社区</h1>
                <button
                  onClick={handleCreatePost}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  发布帖子
                </button>
              </div>
              
              <div className="flex space-x-6 border-b">
                {[
                  { id: 'hot', label: '热门', icon: TrendingUp },
                  { id: 'latest', label: '最新', icon: Clock },
                  { id: 'reviews', label: '测评', icon: Star }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 pb-3 border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-orange-500 text-orange-600'
                          : 'border-transparent text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    {/* Author Info */}
                    <div className="flex items-center mb-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-800">{post.author.name}</span>
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                            {post.author.level}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span>{post.time}</span>
                          {post.isHot && (
                            <span className="text-red-500 font-medium">🔥 热门</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{post.content}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-orange-100 hover:text-orange-600 cursor-pointer transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Images */}
                    {post.images.length > 0 && (
                      <div className="mb-4">
                        <div className={`grid gap-2 ${
                          post.images.length === 1 ? 'grid-cols-1' : 
                          post.images.length === 2 ? 'grid-cols-2' : 
                          'grid-cols-3'
                        }`}>
                          {post.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt=""
                              className="w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                            post.isLiked
                              ? 'bg-red-50 text-red-600'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span>{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            {/* Trending Topics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                热门话题
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={topic.name}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <div>
                      <div className="flex items-center">
                        <span className="text-orange-500 font-medium mr-2">#{index + 1}</span>
                        <span className="text-gray-800 font-medium">{topic.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{topic.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Rules */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">社区规则</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2">1.</span>
                  <span>发布真实的零食体验和评价</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2">2.</span>
                  <span>尊重他人，友善互动</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2">3.</span>
                  <span>禁止发布广告和垃圾信息</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2">4.</span>
                  <span>保护个人隐私信息</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Create Post Modal */}
        {showCreatePost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">发布新帖子</h2>
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      帖子标题
                    </label>
                    <input
                      type="text"
                      placeholder="输入帖子标题..."
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      帖子内容
                    </label>
                    <textarea
                      rows={8}
                      placeholder="分享你的零食体验..."
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      添加图片
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <p className="text-gray-500">点击或拖拽图片到这里</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      标签
                    </label>
                    <input
                      type="text"
                      placeholder="添加标签，用空格分隔..."
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    取消
                  </button>
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                  >
                    发布
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};