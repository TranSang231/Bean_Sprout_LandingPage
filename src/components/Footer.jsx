import React from 'react'
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '#hero', label: 'Trang chủ' },
    { href: '#products', label: 'Sản phẩm' },
    { href: '#story', label: 'Câu chuyện' },
    { href: '#contact', label: 'Liên hệ' }
  ]

  const socialLinks = [
    { 
      href: 'https://facebook.com', 
      icon: Facebook, 
      label: 'Facebook',
      ariaLabel: 'Theo dõi chúng tôi trên Facebook'
    },
    { 
      href: 'https://instagram.com', 
      icon: Instagram, 
      label: 'Instagram',
      ariaLabel: 'Theo dõi chúng tôi trên Instagram'
    },
    { 
      href: 'https://youtube.com', 
      icon: Youtube, 
      label: 'YouTube',
      ariaLabel: 'Đăng ký kênh YouTube của chúng tôi'
    }
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Giá Đỗ Nghi An</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Trọn vị lành, an bữa cơm. Sản phẩm tự nhiên, an toàn cho cả gia đình.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-semibold text-white text-base">Liên kết</h5>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h5 className="font-semibold text-white text-base">Liên hệ</h5>
            <div className="space-y-3">
              <a 
                href="tel:0987654321"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>
                  Hotline: <span className="text-white font-medium">0987 654 321</span>
                </span>
              </a>
              
              <a 
                href="mailto:info@giadonghian.vn"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>
                  Email: <span className="text-white font-medium">info@giadonghian.vn</span>
                </span>
              </a>

              {/* Social Media */}
              <div className="pt-2">
                <p className="text-sm text-slate-400 mb-3">Theo dõi chúng tôi</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-slate-700/50"
                      >
                        <Icon className="w-4 h-4 text-slate-300" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {currentYear} Giá Đỗ Nghi An. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}