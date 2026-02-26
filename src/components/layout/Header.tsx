import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-900 hover:text-[#005CAF] transition-colors"
        >
          <span className="text-[#005CAF] text-2xl">●</span>
          <span>ウルトラマン図鑑</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <Link 
            to="/characters" 
            className="text-sm md:text-base text-gray-600 hover:text-[#005CAF] transition-colors font-medium"
          >
            キャラクター一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}
