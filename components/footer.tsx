'use client';

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/20 glass">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">About Workshop</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An intensive one-day workshop on AI and full-stack development for serious developers looking to master cutting-edge technologies.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#schedule" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Schedule</a></li>
              <li><a href="#speakers" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Speakers</a></li>
              <li><a href="#details" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Details</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email: <a href="mailto:info@workshop2026.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">info@workshop2026.com</a>
            </p>
            <p className="text-gray-400 text-sm mt-3">
              Location: NYC & Online
            </p>
          </div>
        </div>

        <div className="border-t border-indigo-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 AI & Full Stack Workshop. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Terms</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
