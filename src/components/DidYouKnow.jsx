import React from "react";
import {
  Leaf,
  HeartHandshake,
  FlaskConical,
  Sun,
  Earth,
  Lightbulb,
} from "lucide-react";

export default function DidYouKnow() {
  const [visibleCards, setVisibleCards] = React.useState([]);
  const [activeCard, setActiveCard] = React.useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.cardId;
            setVisibleCards((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-card-id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      Icon: Leaf,
      title: "Giá Đỗ Nghi An được trồng tự nhiên?",
      desc: "Chúng tôi cam kết 100% không sử dụng hóa chất, chất kích thích tăng trưởng hay thuốc trừ sâu. Giá đỗ được ủ và phát triển trong môi trường tự nhiên, đảm bảo an toàn tuyệt đối cho sức khỏe người tiêu dùng.",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
    },
    {
      id: 2,
      Icon: HeartHandshake,
      title: "Giá Đỗ Nghi An có lợi ích gì cho sức khỏe?",
      desc: "Giá đỗ chứa nhiều vitamin C, E, và protein; giúp tăng cường miễn dịch, hỗ trợ tiêu hóa và làm đẹp da khi dùng thường xuyên trong chế độ ăn.",
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
    },
    {
      id: 3,
      Icon: FlaskConical,
      title: "Quy trình sản xuất truyền thống được giữ gìn?",
      desc: "Với kinh nghiệm nhiều năm, chúng tôi duy trì phương pháp nuôi trồng thủ công, chú trọng chất lượng và hương vị truyền thống trong từng mẻ giá.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      id: 4,
      Icon: Sun,
      title: "Giá Đỗ Nghi An là sản phẩm OCOP?",
      desc: "Chúng tôi hướng tới tiêu chuẩn chất lượng cao, phấn đấu đạt các chứng nhận địa phương và OCOP để khẳng định giá trị sản phẩm nông nghiệp Việt.",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      id: 5,
      Icon: Earth,
      title: "Giá đỗ có đóng góp vào nông nghiệp bền vững?",
      desc: "Bằng cách ưu tiên các phương pháp canh tác hữu cơ, chúng tôi góp phần giảm tác động môi trường và thúc đẩy nền nông nghiệp xanh.",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50",
    },
    {
      id: 6,
      Icon: Lightbulb,
      title: "Sự khác biệt của giá đỗ tươi sạch?",
      desc: "Giá đỗ tươi của chúng tôi có mập, rễ ngắn và trắng ngà tự nhiên — không bị ngậm hóa chất, giữ trọn hương vị trong món ăn.",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
    },
  ];

  return (
    <section
      id="didyouknow"
      className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Enhanced Decorative background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm font-bold text-indigo-600 bg-gradient-to-r from-indigo-100 to-purple-100 px-5 py-2.5 rounded-full tracking-wide uppercase shadow-sm border border-indigo-200">
              <svg className="inline w-4 h-4 mr-1.5 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Kiến thức thú vị
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Bạn có biết?
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed" style={{ lineHeight: '1.7' }}>
            Khám phá những điều thú vị và lợi ích bất ngờ về giá đỗ sạch Giá Đỗ
            Nghi An cùng hành trình sản xuất truyền thống của chúng tôi.
          </p>
        </div>

        {/* Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map(({ id, Icon, title, desc, gradient, bgGradient }, index) => (
            <div
              key={id}
              data-card-id={id}
              onMouseEnter={() => setActiveCard(id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group relative p-8 bg-white rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-transparent transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer ${
                visibleCards.includes(String(id))
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              role="article"
              aria-labelledby={`card-title-${id}`}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-sm`}></div>
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-3xl`}></div>

              {/* Content wrapper */}
              <div className="relative z-10 text-center">
                {/* Enhanced Icon */}
                <div className={`mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl ${
                  activeCard === id ? 'animate-pulse' : ''
                }`}>
                  <Icon
                    size={36}
                    strokeWidth={2.5}
                    className="text-white transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>

                {/* Enhanced Content */}
                <h4
                  id={`card-title-${id}`}
                  className={`font-extrabold text-xl md:text-2xl mb-4 transition-all duration-300 ${
                    activeCard === id 
                      ? `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`
                      : 'text-gray-900'
                  }`}
                >
                  {title}
                </h4>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300" style={{ lineHeight: '1.7' }}>
                  {desc}
                </p>

                {/* Read more indicator */}
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Tìm hiểu thêm</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </div>

              {/* Enhanced Decorative corners */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${gradient} rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-lg`}></div>
              
              {/* Star sparkle effect */}
              {activeCard === id && (
                <div className="absolute top-4 right-4">
                  <svg className="w-5 h-5 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action footer */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl border-2 border-indigo-100 shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Bạn có câu hỏi nào về sản phẩm của chúng tôi?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Liên hệ với chúng tôi</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}