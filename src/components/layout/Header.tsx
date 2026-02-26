import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <a href="#main-content" className="skip-link">
        メインコンテンツへスキップ
      </a>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-[#005CAF] transition-colors"
            aria-label="ウルトラマン図鑑 ホーム"
          >
            <span className="text-[#005CAF] text-2xl" aria-hidden="true">●</span>
            <span>ウルトラマン図鑑</span>
          </Link>
          <nav aria-label="メインナビゲーション">
            <Link 
              to="/characters" 
              className="text-gray-600 hover:text-[#005CAF] transition-colors font-medium py-2 px-3"
            >
              キャラクター一覧
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
