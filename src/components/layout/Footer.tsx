import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <span className="text-[#005CAF]">●</span>
            <span>ウルトラマン図鑑</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6 text-sm">
            <Link to="/characters" className="text-gray-600 hover:text-[#005CAF]">
              キャラクター
            </Link>
            <a 
              href="https://github.com/kojiroor/ultra-chars" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#005CAF]"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © 2026 Ultra Character Viewer
          </p>
        </div>
      </div>
    </footer>
  );
}
