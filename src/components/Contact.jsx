import React, {useState} from 'react'
export default function Contact(){
  const [sent,setSent] = useState(false)
  function onSubmit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log('Contact (React demo):', data);
    setSent(true);
    e.target.reset();
  }
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--brand)]">Liên hệ với chúng tôi</h2>
          <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed" style={{ lineHeight: '1.7' }}>Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn. Vui lòng liên hệ qua các kênh dưới đây.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-xl text-slate-900">Thông tin liên hệ</h3>
            <ul className="mt-4 text-[15px] text-slate-700 space-y-3">
              <li><strong>Hotline:</strong> 0987 654 321</li>
              <li><strong>Email:</strong> info@giadonghian.vn</li>
              <li><strong>Địa chỉ:</strong> 123 Đường An Ninh, Xã Nghi An, TP. Vinh, Nghệ An</li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-slate-600">Theo dõi chúng tôi</p>
              <div className="mt-3 flex items-center gap-3 text-slate-600">
                <a href="#" aria-label="facebook" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">f</a>
                <a href="#" aria-label="instagram" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">ig</a>
                <a href="#" aria-label="youtube" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">yt</a>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-6">
            {sent ? (
              <div className="text-center">
                <h4 className="font-semibold">Cảm ơn!</h4>
                <p className="mt-2 text-sm text-slate-600">Chúng tôi đã nhận được lời nhắn của bạn và sẽ liên hệ sớm.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                <div>
                  <label className="text-sm text-slate-700">Họ và tên</label>
                  <input name="name" required className="w-full mt-1 border rounded px-3 py-2" placeholder="Họ và tên của bạn" />
                </div>
                <div>
                  <label className="text-sm text-slate-700">Email</label>
                  <input name="email" type="email" required className="w-full mt-1 border rounded px-3 py-2" placeholder="Địa chỉ email của bạn" />
                </div>
                <div>
                  <label className="text-sm text-slate-700">Tiêu đề</label>
                  <input name="subject" className="w-full mt-1 border rounded px-3 py-2" placeholder="Tiêu đề" />
                </div>
                <div>
                  <label className="text-sm text-slate-700">Nội dung</label>
                  <textarea name="message" rows="5" className="w-full mt-1 border rounded px-3 py-2" placeholder="Nội dung tin nhắn của bạn"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full px-4 py-2 bg-[var(--brand)] text-white rounded">Gửi tin nhắn</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
