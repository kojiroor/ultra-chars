import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-xl">🔴</span>
            <span className="font-medium">ウルトラマン図鑑</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="/characters" className="hover:text-gray-900 transition-colors">
              キャラクター
            </Link>
            <a 
              href="https://github.com/kojiroor/ultra-chars" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
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
