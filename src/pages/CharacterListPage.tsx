import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CharacterCard } from '../components/character/CharacterCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    <main id="main-content" className="min-h-screen bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            キャラクター一覧
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            歴代ウルトラマンシリーズに登場する光の巨人たち。
            昭和、平成、新生代を網羅したデータベース。
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {result.items.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        {/* Pagination */}
        {result.totalPages > 1 && (
          <nav 
            className="flex justify-center items-center gap-2"
            aria-label="ページネーション"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="前のページ"
            >
              <ChevronLeft className="w-4 h-4" />
              前へ
            </Button>
            
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
                  <Button
                    key={pageNum}
                    variant={pageNum === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => goToPage(pageNum)}
                    aria-label={`${pageNum}ページ`}
                    aria-current={pageNum === page ? "page" : undefined}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(page + 1)}
              disabled={page === result.totalPages}
              aria-label="次のページ"
            >
              次へ
              <ChevronRight className="w-4 h-4" />
            </Button>
          </nav>
        )}

        {/* Stats */}
        <p className="text-center mt-8 text-sm text-muted-foreground">
          全 {result.total} キャラクター中 {(page - 1) * PAGE_SIZE + 1}-{Math.min(page * PAGE_SIZE, result.total)} を表示
        </p>
      </div>
    </main>
  );
}
