import { Link } from 'react-router-dom';

export function TopPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center px-6 py-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 mb-8 shadow-lg shadow-red-500/30">
          <span className="text-4xl">🔴</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          ウルトラマン図鑑
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 mb-4 font-light">
          Ultra Character Viewer
        </p>
        
        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl mx-auto">
          昭和から最新作まで、歴代ウルトラマンの情報を網羅したデータベース。
          光の国の戦士たちの物語を探求しよう。
        </p>
        
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <span>キャラクター一覧へ</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">24+</div>
            <div className="text-sm text-gray-500 mt-1">キャラクター</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-500 mt-1">年の歴史</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">∞</div>
            <div className="text-sm text-gray-500 mt-1">勇気</div>
          </div>
        </div>
      </div>
    </div>
  );
}
