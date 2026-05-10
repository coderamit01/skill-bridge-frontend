export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>SkillBridge 🎓</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Connect with expert tutors and unlock your potential. 1-on-1 online tutoring made simple and affordable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="/tutors" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Browse Tutors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Become a Tutor
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Subjects */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Popular Subjects</h4>
            <ul className="space-y-3">
              <li>
                <a href="/tutors?subject=Mathematics" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Mathematics
                </a>
              </li>
              <li>
                <a href="/tutors?subject=Science" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Science
                </a>
              </li>
              <li>
                <a href="/tutors?subject=English" className="text-gray-400 hover:text-white transition-colors font-medium">
                  English
                </a>
              </li>
              <li>
                <a href="/tutors?subject=Programming" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Programming
                </a>
              </li>
              <li>
                <a href="/tutors?subject=Physics" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Physics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                <a href="mailto:support@skillbridge.com" className="hover:text-white transition-colors font-medium">
                  📧 support@skillbridge.com
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <a href="tel:+1234567890" className="hover:text-white transition-colors font-medium">
                  📞 +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-400 text-sm font-medium">
                📍 San Francisco, USA
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 font-medium mb-4 md:mb-0">
            © 2026 SkillBridge. All rights reserved. Empowering learners worldwide.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
