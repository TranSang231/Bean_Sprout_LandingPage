import React from 'react'

export default function Story(){
  const stories = [
    {
      title: "Câu Chuyện Của Giá Đỗ Nghi An",
      description: "Chúng tôi tin rằng món ăn ngon nhất bắt đầu từ những nguyên liệu sạch và tươi ngon nhất. Giá Đỗ Nghi An không chỉ là sản phẩm, mà còn là hành trình giữ gìn hương vị truyền thống và lan tỏa giá trị tự nhiên đến từng bữa ăn gia đình.",
      image: "/assets/story-1.png",
      imageAlt: "Bếp nhà",
      align: "left",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Nguồn Gốc và Truyền Thống Lâu Đời",
      description: "Khởi nguồn từ một làng nghề truyền thống hàng trăm năm tuổi, Giá Đỗ Nghi An mang trong mình bí quyết trồng giá thủ công được truyền từ đời này sang đời khác. Chúng tôi tự hào kế thừa và phát triển phương pháp canh tác tự nhiên, không hóa chất, để mỗi mầm giá đều tinh khiết và tràn đầy sức sống.",
      image: "/assets/story-2.png",
      imageAlt: "Nghề truyền thống",
      align: "right",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Giá Trị Cốt Lõi: Tự Nhiên, Tinh Khiết & Bền Vững",
      description: "Mỗi hạt đậu được chọn lựa kỹ càng, mỗi giọt nước tưới đều được lọc sạch. Chúng tôi cam kết mang đến những sản phẩm giá đỗ không chỉ ngon mà còn an toàn tuyệt đối cho sức khỏe, đồng thời gìn giữ môi trường và phát triển cộng đồng bền vững.",
      image: "/assets/story-3.png",
      imageAlt: "Giá trị cốt lõi",
      align: "left",
      gradient: "from-teal-500 to-green-600"
    },
    {
      title: "Nghệ Thuật Trồng Giá: Từ Tâm Đến Bàn Ăn",
      description: "Quy trình làm giá tại Nghi An là sự kết hợp hài hòa giữa kiến thức khoa học hiện đại và kinh nghiệm cha ông. Chúng tôi không chỉ trồng giá, mà còn kiến tạo nên những mầm xanh mang giá trị dinh dưỡng cao, với tình yêu và sự tỉ mỉ trong từng công đoạn.",
      image: "/assets/story-4.png",
      imageAlt: "Mầm xanh",
      align: "right",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="story" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-semibold text-green-700">Hành trình của chúng tôi</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Khám Phá <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Câu Chuyện</span>
          </h2>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed" style={{ lineHeight: '1.7' }}>
            Mỗi sản phẩm giá đỗ là một câu chuyện về truyền thống, tâm huyết và sự cam kết với chất lượng
          </p>
        </div>

        {/* Story Sections */}
        <div className="space-y-32">
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`group md:grid md:grid-cols-2 md:gap-16 md:items-center ${
                story.align === 'right' ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${story.align === 'right' ? 'md:col-start-2' : ''} mb-8 md:mb-0`}>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10`}></div>
                  
                  {/* Image container */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={story.image} 
                      alt={story.imageAlt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-6 ${story.align === 'right' ? 'right-6' : 'left-6'} w-16 h-16 bg-gradient-to-br ${story.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}></div>
                  
                  {/* Number badge */}
                  <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${story.gradient}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className={`hidden md:block absolute -z-10 ${story.align === 'right' ? '-right-12' : '-left-12'} top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br ${story.gradient} rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700`}></div>
              </div>

              {/* Content */}
              <div className={`${story.align === 'right' ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="relative">
                  {/* Decorative line */}
                  <div className={`absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b ${story.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  
                  <div className="space-y-6">
                    {/* Category badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${story.gradient}`}></div>
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Phần {index + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight group-hover:text-green-700 transition-colors duration-300">
                      {story.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed" style={{ lineHeight: '1.7' }}>
                      {story.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <a 
                        href="#story" 
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${story.gradient} text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn`}
                      >
                        <span>Tìm Hiểu Thêm</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </a>
                    </div>

                    {/* Stats or features (optional enhancement) */}
                    <div className="pt-8 flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-medium text-slate-600">100% Tự nhiên</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-medium text-slate-600">Không hóa chất</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-32 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-12 py-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-200 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Hành trình của chúng tôi vẫn tiếp tục
              </h3>
              <p className="text-slate-600">
                Cùng đồng hành và chia sẻ những giá trị tốt đẹp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}