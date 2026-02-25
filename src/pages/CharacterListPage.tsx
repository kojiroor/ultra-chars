import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CharacterCard } from '../components/character/CharacterCard';
import { getCharacters } from '../data/characters';

const PAGE_SIZE = 12;

export function CharacterListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const result = useMemo(() => getCharacters(page, PAGE_SIZE), [page]);

  const goToPage = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            キャラクター一覧
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            歴代ウルトラマンシリーズに登場する光の巨人たち。
            昭和、平成、新生代を網羅したデータベース。
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {result.items.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        {/* Pagination */}
        {result.totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              前へ
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, result.totalPages) }, (_, i) => {
                let pageNum;
                if (result.totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= result.totalPages - 2) {
                  pageNum = result.totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                      pageNum === page
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === result.totalPages}
              className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              次へ
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="text-center mt-8 text-sm text-gray-400">
          全 {result.total} キャラクター中 {(page - 1) * PAGE_SIZE + 1}-{Math.min(page * PAGE_SIZE, result.total)} を表示
        </div>
      </div>
    </div>
  );
}
