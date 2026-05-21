import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Map,
  Phone,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const footerMenu1 = [
    { name: "Home", path: "/" },
    { name: "Browse Tutors", path: "/browse-tutors" },
    { name: "Become a Tutor", path: "/become-a-tutor" },
    { name: "Login", path: "/login" },
  ];

  const footerMenu2 = [
    { name: "Mathematics", path: "/mathematics" },
    { name: "Science", path: "/science" },
    { name: "English", path: "/english" },
    { name: "Programming", path: "/programming" },
    { name: "Physics", path: "/physics" },
  ];
  const socialIcons = [
    { name: "facebook", url: "https://facebook.com", icon: <Facebook /> },
    { name: "x", url: "https://x.com", icon: <Twitter /> },
    { name: "linkedin", url: "https://linkedin.com", icon: <Linkedin /> },
    { name: "instagram", url: "https://instagram.com", icon: <Instagram /> },
  ];
  return (
    <footer className="bg-brand text-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span>SkillBridge 🎓</span>
            </h3>
            <p className="text-slate-800 leading-relaxed text-base">
              Connect with expert tutors and unlock your potential. 1-on-1
              online tutoring made simple and affordable.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800  mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerMenu1.map((item, id) => (
                <li key={id}>
                  <Link
                    href={item.path}
                    className="text-slate-800  hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800  mb-6 text-lg">
              Popular Subjects
            </h4>
            <ul className="space-y-3">
              {footerMenu2.map((item, id) => (
                <li key={id}>
                  <Link
                    href={item.path}
                    className="text-slate-800  hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800  mb-6 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-800">
                <a
                  href="mailto:support@skillbridge.com"
                  className="flex items-center gap-1 hover:text-white transition-colors text-base"
                >
                  <Mail className="h-4 w-4" />
                  <span>support@skillbridge.com</span>
                </a>
              </li>
              <li className="text-slate-800">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-1 hover:text-white transition-colors text-base"
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li className="flex items-center gap-1 text-slate-800 text-base">
                <Map className="h-4 w-4" />
                <span>San Francisco, USA</span>
              </li>
            </ul>
            <ul className="flex gap-3 pt-3">
              {socialIcons.length > 0 &&
                socialIcons.map((item, id) => (
                  <li key={id} className="text-slate-800 text-sm">
                    <Link
                      href={item.url}
                      className="transition-all text-slate-800 flex items-center justify-center h-10 w-10 rounded-full p-2 border border-slate-800 hover:-translate-y-1"
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-800 font-medium mb-4 md:mb-0">
            © 2026 SkillBridge. All rights reserved. Empowering learners
            worldwide.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-sm text-slate-800 hover:text-white transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-800  hover:text-white transition-colors font-medium"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
