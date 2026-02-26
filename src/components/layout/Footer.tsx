import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <span className="text-[#005CAF]" aria-hidden="true">●</span>
            <span>ウルトラマン図鑑</span>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link to="/characters" className="text-gray-600 hover:text-[#005CAF]">
                  キャラクター
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/kojiroor/ultra-chars" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#005CAF]"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-xs text-gray-400">
            © 2026 Ultra Character Viewer
          </p>
        </div>
      </div>
    </footer>
  );
}
