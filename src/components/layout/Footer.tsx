import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors">About us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link href="/team" className="text-slate-300 hover:text-amber-400 transition-colors">Our Team</Link></li>
              <li><Link href="/clients" className="text-slate-300 hover:text-amber-400 transition-colors">Clients</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-amber-400 transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <span className="text-amber-400">📞</span>
                <span>+91-9872628189</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-amber-400">✉️</span>
                <span>saacounselors@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-400 mt-1">📍</span>
                <span>Office: Sco. 117-18, 2nd Floor, Sector 17 B Chandigarh – 160017</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-amber-400 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  <span className="sr-only">X</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Legal Disclaimer</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Rules of Bar Council of India does not permit law firms or Lawyers to develop a regular website. 
              This is only a platform aimed at providing information regarding Indian Laws & Procedure. 
              This site is not intended for advertisement or soliciting.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; 2024 SAA COUNSELORS | Designed & Developed by Digital Roof</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
