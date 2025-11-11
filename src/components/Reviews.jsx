import React from 'react'

export default function Reviews(){
  const reviews = [
    {
      name: "Nguyễn Thị Hoa",
      rating: 5,
      comment: "Sản phẩm giàu dinh dưỡng, tươi và sạch. Dịch vụ giao hàng nhanh, đóng gói cẩn thận.",
      date: "2024-10-05",
      color: "bg-pink-500"
    },
    {
      name: "Trần Văn Mạnh",
      rating: 5,
      comment: "Rau mầm rất tươi, vị ngon. Rất hài lòng về chất lượng sản phẩm.",
      date: "2024-11-01",
      color: "bg-blue-500"
    },
    {
      name: "Lê Thanh Thảo",
      rating: 5,
      comment: "Chất lượng giá tốt và rất tươi, khiến cả gia đình thích thú mỗi bữa ăn.",
      date: "2024-11-15",
      color: "bg-purple-500"
    },
    {
      name: "Phạm Duy An",
      rating: 5,
      comment: "Giá đỗ sạch, thơm ngon và giữ được độ tươi lâu khi bảo quản đúng cách.",
      date: "2024-12-03",
      color: "bg-green-500"
    },
    {
      name: "Võ Mai Linh",
      rating: 5,
      comment: "Tôi rất hài lòng về độ tươi và gói đóng gói tiện dụng của sản phẩm.",
      date: "2024-01-10",
      color: "bg-orange-500"
    },
    {
      name: "Đặng Tuấn Kiệt",
      rating: 5,
      comment: "Sản phẩm luôn được đóng gói cẩn thận, tôi rất yên tâm khi dùng cho gia đình.",
      date: "2024-01-28",
      color: "bg-teal-500"
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').slice(-2).map(n => n[0]).join('').toUpperCase()
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>Đánh Giá Từ Khách Hàng</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent leading-tight">
            Khách Hàng Nói Gì Về Chúng Tôi?
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed" style={{ lineHeight: '1.7' }}>Chúng tôi luôn lắng nghe và trân trọng những phản hồi từ quý khách hàng. Dưới đây là những cảm nhận chân thực về sản phẩm và dịch vụ của Giá Đỗ Nghi An.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <article 
              key={index}
              className="relative p-7 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-green-50/0 group-hover:from-emerald-50/50 group-hover:to-green-50/30 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${review.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    {getInitials(review.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">{review.name}</h4>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed italic relative z-10" style={{ lineHeight: '1.7' }}>"{review.comment}"</p>
                
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time className="text-sm text-slate-500 font-medium">{review.date}</time>
                  <svg className="w-4 h-4 text-emerald-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 border-2 border-emerald-100 rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Bạn Đã Sẵn Sàng Chia Sẻ Trải Nghiệm Của Mình?</h3>
            <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">Hãy cho chúng tôi biết cảm nhận của bạn về sản phẩm và dịch vụ của Giá Đỗ Nghi An. Phản hồi của bạn sẽ giúp chúng tôi hoàn thiện hơn!</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-700 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg group/btn"
            >
              <span>Chia Sẻ Trải Nghiệm Của Bạn</span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}