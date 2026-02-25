import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl font-semibold text-gray-900 hover:text-red-600 transition-colors"
        >
          <span className="text-2xl">🔴</span>
          <span>ウルトラマン図鑑</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link 
            to="/characters" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            キャラクター一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}
