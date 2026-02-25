import { Link } from 'react-router-dom';

export function TopPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
            Ultra Characters
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            ウルトラマンシリーズの歴代ヒーローを網羅した<br className="hidden md:block" />
            キャラクターデータベース
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
        >
          キャラクター一覧へ
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">25+</div>
            <div className="text-sm text-gray-500 mt-1">キャラクター</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">1966</div>
            <div className="text-sm text-gray-500 mt-1">初登場年</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-500 mt-1">年の歴史</div>
          </div>
        </div>
      </div>
    </div>
  );
}
