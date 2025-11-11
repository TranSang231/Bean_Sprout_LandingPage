import React from "react";
import {
  Leaf,
  RefreshCw,
  ShieldCheck,
  Sprout,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

export default function Commitment() {
  const commitments = [
    {
      icon: Leaf,
      title: "Sản phẩm tự nhiên và tinh khiết",
      description: "Chúng tôi cam kết sử dụng nguyên liệu hoàn toàn tự nhiên, không hóa chất độc hại, đảm bảo từng hạt giá được nuôi trồng trong môi trường sạch nhất.",
      gradient: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      hoverGradient: "group-hover:from-green-100 group-hover:to-emerald-100"
    },
    {
      icon: RefreshCw,
      title: "Phương pháp nuôi trồng truyền thống",
      description: "Giá Đỗ Nghi An duy trì các phương pháp nuôi trồng thủ công, kế thừa bí quyết từ bao đời, mang đến hương vị truyền thống đặc trưng mà không nơi nào có được.",
      gradient: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      hoverGradient: "group-hover:from-blue-100 group-hover:to-cyan-100"
    },
    {
      icon: ShieldCheck,
      title: "Vệ sinh an toàn thực phẩm",
      description: "Quy trình sản xuất được kiểm soát nghiêm ngặt từ khâu chọn hạt đến đóng gói, tuân thủ các tiêu chuẩn vệ sinh an toàn thực phẩm cao nhất.",
      gradient: "from-indigo-50 to-purple-50",
      iconColor: "text-indigo-600",
      hoverGradient: "group-hover:from-indigo-100 group-hover:to-purple-100"
    },
    {
      icon: Sprout,
      title: "Bền vững và thân thiện với môi trường",
      description: "Chúng tôi luôn ý thức bảo vệ môi trường, áp dụng các giải pháp tiết kiệm nước và năng lượng, hạn chế rác thải, góp phần vào sự phát triển bền vững của nông nghiệp.",
      gradient: "from-teal-50 to-green-50",
      iconColor: "text-teal-600",
      hoverGradient: "group-hover:from-teal-100 group-hover:to-green-100"
    },
    {
      icon: HeartHandshake,
      title: "Trách nhiệm cộng đồng",
      description: "Giá Đỗ Nghi An tin vào sự phát triển hài hòa với cộng đồng, hỗ trợ nông dân địa phương và tham gia các hoạt động xã hội.",
      gradient: "from-pink-50 to-rose-50",
      iconColor: "text-pink-600",
      hoverGradient: "group-hover:from-pink-100 group-hover:to-rose-100"
    },
    {
      icon: Lightbulb,
      title: "Đổi mới và phát triển",
      description: "Không ngừng nghiên cứu và ứng dụng công nghệ mới để nâng cao chất lượng sản phẩm, đồng thời tối ưu hóa nhu cầu của khách hàng.",
      gradient: "from-amber-50 to-yellow-50",
      iconColor: "text-amber-600",
      hoverGradient: "group-hover:from-amber-100 group-hover:to-yellow-100"
    }
  ];

  return (
    <section id="commitment" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-700">100% Cam kết chất lượng</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Cam kết của <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">chúng tôi</span>
          </h2>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed" style={{ lineHeight: '1.7' }}>
            Tại Giá Đỗ Nghi An, chúng tôi tự hào mang đến những sản phẩm nông
            nghiệp sạch, chất lượng cao, được nuôi trồng và chế biến theo
            phương pháp truyền thống, giữ trọn hương vị tự nhiên và giá trị
            dinh dưỡng. Mỗi cam kết là lời hứa của chúng tôi về sự minh bạch,
            bền vững và trách nhiệm với cộng đồng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full p-8 bg-white backdrop-blur-sm bg-opacity-90 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon container with enhanced animation */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <Icon className={`${item.iconColor} group-hover:scale-110 transition-transform duration-500`} size={28} strokeWidth={2.5} />
                    </div>
                    
                    {/* Number badge */}
                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-slate-100 group-hover:bg-white flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-all duration-300">
                      {index + 1}
                    </div>
                    
                    <h3 className="font-bold text-xl md:text-2xl text-slate-900 mb-4 group-hover:text-slate-900 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors" style={{ lineHeight: '1.7' }}>
                      {item.description}
                    </p>
                    
                    {/* Read more indicator */}
                    <div className="mt-6 flex items-center text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Tìm hiểu thêm</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-transparent via-gray-50 to-gray-100 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500 blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-transparent via-gray-50 to-gray-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced bottom badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white via-slate-50 to-white rounded-full border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-slate-800">Cam kết được kiểm chứng</span>
              <span className="text-xs text-slate-500">Bởi cộng đồng & đối tác</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}