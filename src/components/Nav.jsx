import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('products');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ['products', 'commitment', 'story', 'packaging', 'reviews', 'didyouknow', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#products', label: 'Sản phẩm' },
    { href: '#commitment', label: 'Cam kết' },
    { href: '#story', label: 'Câu chuyện' },
    { href: '#packaging', label: 'Bao bì' },
    { href: '#reviews', label: 'Đánh giá' },
    { href: '#didyouknow', label: 'Bạn có biết?' },
    { href: '#contact', label: 'Liên hệ' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#hero" 
                onClick={(e) => scrollToSection(e, '#hero')}
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  {/* <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="relative text-emerald-600 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path 
                      d="M12 2C12 2 9 6 12 9C15 12 12 22 12 22" 
                      stroke="currentColor" 
                      strokeWidth="1.8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
                  </svg> */}
                  <img 
                    src="/assets/logo.png" 
                    alt="Giá Đỗ Nghi An Logo"
                    className="w-8 h-8 object-contain relative group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                    Giá Đỗ Nghi An
                  </span>
                  <div className="text-[11px] text-gray-500 -mt-1 font-medium">Tươi sạch - An toàn</div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center flex-1 justify-center px-8">
              <ul className="flex items-center space-x-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <li key={link.href}>
                      <a 
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'text-emerald-600'
                            : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full"></span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
              >
                Liên hệ ngay
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 pt-2 pb-4 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="block w-full px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm font-semibold text-center shadow-lg shadow-emerald-500/30"
              >
                Liên hệ ngay
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content jump */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}