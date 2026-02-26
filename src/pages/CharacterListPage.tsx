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
    <main id="main-content" className="bg-gray-50 min-h-screen py-8 md:py-12">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            キャラクター一覧
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            歴代ウルトラマンシリーズに登場する光の巨人たち。
            昭和、平成、新生代を網羅したデータベースです。
          </p>
        </header>

        {/* Character Grid */}
        <section aria-label="キャラクターリスト">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {result.items.map((character) => (
              <li key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
        </section>

        {/* Pagination */}
        {result.totalPages > 1 && (
          <nav 
            aria-label="ページネーション"
            className="flex justify-center items-center gap-2"
          >
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="btn btn-secondary"
              aria-label="前のページ"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              前へ
            </button>
            
            <div className="flex items-center gap-1" role="group" aria-label="ページ番号">
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
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                    aria-label={`${pageNum}ページ`}
                    aria-current={pageNum === page ? 'page' : undefined}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === result.totalPages}
              className="btn btn-secondary"
              aria-label="次のページ"
            >
              次へ
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        )}

        {/* Stats */}
        <p className="text-center mt-8 text-sm text-gray-400">
          全 {result.total} キャラクター中 {Math.min((page - 1) * PAGE_SIZE + 1, result.total)}-{Math.min(page * PAGE_SIZE, result.total)} を表示
        </p>
      </div>
    </main>
  );
}
