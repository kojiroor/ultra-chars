import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-shadow">
            <span className="text-white text-lg font-bold">U</span>
          </div>
          <span className="text-lg font-semibold text-gray-900 tracking-tight">
            Ultra Characters
          </span>
        </Link>
        
        <nav>
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
