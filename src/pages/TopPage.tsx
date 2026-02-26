import { Link } from 'react-router-dom';

export function TopPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 md:py-16">
      <div className="text-center px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#005CAF] mb-6 md:mb-8">
          <span className="text-white text-2xl md:text-3xl font-bold">U</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          ウルトラマン図鑑
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10">
          昭和から最新作まで、歴代ウルトラマンの情報を網羅したデータベース
        </p>
        
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 bg-[#005CAF] text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-semibold hover:bg-[#004A8C] transition-colors"
        >
          キャラクター一覧へ
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        
        <div className="mt-10 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900">24+</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">キャラクター</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900">50+</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">年の歴史</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#005CAF]">∞</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">勇気</div>
          </div>
        </div>
      </div>
    </div>
  );
}
