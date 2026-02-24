import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CharacterCard } from '../components/character/CharacterCard';
import { getCharacters } from '../data/characters';

const PAGE_SIZE = 20;

export function CharacterListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const result = useMemo(() => getCharacters(page, PAGE_SIZE), [page]);

  const goToPage = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">キャラクター一覧</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {result.items.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        {result.totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-white border rounded disabled:opacity-50"
            >
              前へ
            </button>
            {Array.from({ length: result.totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`px-4 py-2 border rounded ${
                  p === page ? 'bg-red-600 text-white' : 'bg-white'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === result.totalPages}
              className="px-4 py-2 bg-white border rounded disabled:opacity-50"
            >
              次へ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
