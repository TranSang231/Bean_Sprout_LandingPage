import React from 'react'

export default function Products(){
  const products = [
    {
      id: 1,
      image: "/assets/prod-1.png",
      category: "Nguyên liệu ươm giá",
      title: "Hạt Đậu Xanh Nghi An",
      description: "Hạt đậu xanh tuyển chọn kỹ, tỉ lệ nảy mầm > 98%, không xử lý hóa chất. Đảm bảo nguồn nguyên liệu sạch, chuẩn OCOP, an toàn cho ươm giá đỗ tại nhà.",
      badge: "OCOP",
      gradient: "from-green-500 to-emerald-600",
      icon: "🫘"
    },
    {
      id: 2,
      image: "/assets/prod-2.png",
      category: "Giá đỗ tươi",
      title: "Giá Đỗ Tươi Nghi An (300g / 500g)",
      description: "Giá đỗ tươi trắng ngà, thân mập, rễ ngắn, hoàn toàn tự nhiên. Túi thông minh thoáng khí giúp kéo dài thời gian bảo quản mà không cần chất bảo quản.",
      badge: "Bán chạy",
      gradient: "from-blue-500 to-cyan-600",
      icon: "�"
    },
    {
      id: 3,
      image: "/assets/prod-3.png",
      category: "Dụng cụ ươm giá",
      title: "Bộ Kit Ủ Giá Tại Nhà (HomeKit)",
      description: "Bộ dụng cụ ủ giá bằng nhựa sinh học hoặc thép không gỉ, tái sử dụng được. Giúp người dùng tự ươm giá sạch ngay tại nhà — tiết kiệm, tiện lợi, bền vững.",
      badge: "HomeKit",
      gradient: "from-teal-500 to-green-600",
      icon: "🏡"
    },
    {
      id: 4,
      image: "/assets/prod-4.png",
      category: "Sản phẩm thủ công",
      title: "Bìa Đậu Nghi An",
      description: "Sản phẩm thủ công, dùng sữa đậu xanh nguyên chất, không chất làm đông nhân tạo. Hộp giấy sinh học, có nắp trong suốt tái chế được.",
      badge: "Thủ công",
      gradient: "from-lime-500 to-green-600",
      icon: "🥛"
    },
    {
      id: 5,
      image: "/assets/prod-5.png",
      category: "Mầm hạt dinh dưỡng",
      title: "Mầm Đậu Xanh Tươi (Sprout Mix)",
      description: "Hỗn hợp mầm đậu xanh, mầm đậu nành và mầm lúa mì – giàu enzyme và vitamin E. Dùng trong salad, smoothie hoặc món ăn healthy.",
      badge: "Healthy",
      gradient: "from-indigo-500 to-purple-600",
      icon: "🌿"
    },
    {
      id: 6,
      image: "/assets/prod-6.png",
      category: "Bao bì thông minh",
      title: "Bao Bì Thông Minh Nghi An (SmartPack)",
      description: "Bao bì cảm biến độ ẩm và nhiệt độ, giúp bảo quản thực phẩm tươi lâu hơn. Lớp phủ sinh học tự phân hủy, thân thiện môi trường.",
      badge: "SmartPack",
      gradient: "from-sky-500 to-blue-600",
      icon: "♻️"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-semibold text-green-700">Sản phẩm OCOP</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Sản phẩm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Giá Đỗ Nghi An</span> và Bao bì Thông minh
          </h2>
          
          <p className="text-base md:text-lg text-slate-700 leading-relaxed" style={{ lineHeight: '1.7' }}>
            Khám phá các sản phẩm OCOP chất lượng cao của chúng tôi, được đóng gói bằng giải pháp thông minh và thân thiện với môi trường, đảm bảo độ tươi ngon và bền vững.
          </p>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-slate-600 mt-1">Tự nhiên</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">6+</div>
              <div className="text-sm text-slate-600 mt-1">Sản phẩm</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">OCOP</div>
              <div className="text-sm text-slate-600 mt-1">Chứng nhận</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article 
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Floating badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                  <span className="text-xs font-bold text-slate-700">{product.badge}</span>
                </div>

                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {product.icon}
                </div>

                {/* Hover overlay with quick action */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold shadow-xl hover:bg-slate-100 transition-colors">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl md:text-2xl text-slate-900 mb-3 leading-snug group-hover:text-green-700 transition-colors duration-300">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 mb-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Chất lượng</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>An toàn</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="#" 
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:bg-gradient-to-r hover:${product.gradient} hover:text-white hover:border-transparent transition-all duration-300 group/btn`}
                >
                  <span>Tìm hiểu thêm</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${product.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl`}></div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 px-12 py-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl border border-green-200 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-900">
                  Không tìm thấy sản phẩm bạn cần?
                </h3>
                <p className="text-slate-600 mt-1">
                  Liên hệ với chúng tôi để được tư vấn về sản phẩm phù hợp
                </p>
              </div>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}