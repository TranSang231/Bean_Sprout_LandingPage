import React, { useState, useEffect } from 'react';
import { Sparkles, Award, Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-indigo-50"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-40 -right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-4 animate-bounce">
              <Sparkles size={14} />
              <span>Sản phẩm OCOP chất lượng cao</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Giá Đỗ Nghi An
              </span>
              <br />
              <span className="text-gray-900">
                Trọn vị lành,
                <br />
                an bữa cơm
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mb-6" style={{ lineHeight: '1.7' }}>
              Khám phá sản phẩm giá đỗ OCOP chất lượng cao, được nuôi trồng theo phương pháp tự nhiên, đảm bảo an toàn và dinh dưỡng từ trái tim của Nghệ An.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
                <Shield size={16} className="text-emerald-600" />
                <span className="text-xs font-medium text-gray-700">100% Tự nhiên</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
                <Award size={16} className="text-emerald-600" />
                <span className="text-xs font-medium text-gray-700">Chuẩn OCOP</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-200">
                <Sparkles size={16} className="text-emerald-600" />
                <span className="text-xs font-medium text-gray-700">Tươi mỗi ngày</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm font-semibold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
              >
                Khám phá sản phẩm
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-700 text-sm font-semibold hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                Câu chuyện thương hiệu
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-emerald-600 mb-0.5">100%</div>
                <div className="text-sm text-gray-600 font-medium">Tự nhiên</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600 mb-0.5">15+</div>
                <div className="text-sm text-gray-600 font-medium">Năm kinh nghiệm</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600 mb-0.5">1000+</div>
                <div className="text-sm text-gray-600 font-medium">Khách hàng</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } flex justify-center`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500
                            w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>

              {/* Image */}
              <img
                src="/assets/hero.png"
                alt="Mâm giá đỗ tươi sạch Nghi An"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">Chứng nhận OCOP</div>
                    <div className="text-xs text-gray-600">Sản phẩm đạt chuẩn chất lượng cao</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500 rounded-2xl shadow-lg animate-float hidden lg:block opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-indigo-500 rounded-full shadow-lg animate-float-delayed hidden lg:block opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
