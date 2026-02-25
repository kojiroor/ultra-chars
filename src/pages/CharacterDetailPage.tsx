import { useParams, Link } from 'react-router-dom';
import { getCharacterById } from '../data/characters';

export function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const character = id ? getCharacterById(id) : undefined;

  if (!character) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">キャラクターが見つかりません</h1>
          <p className="text-gray-500 mb-6">指定されたキャラクターは存在しません。</p>
          <Link
            to="/characters"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            キャラクター一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-medium">キャラクター一覧に戻る</span>
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/2 aspect-square md:aspect-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full max-w-md object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex flex-col items-center justify-center w-full h-full text-gray-300">
                      <svg class="w-32 h-32 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span class="text-lg font-medium">${character.name}</span>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Info */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm font-medium text-red-600 mb-2">{character.series}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                {character.name}
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm text-gray-500">身長</div>
                  <div className="font-semibold text-gray-900">{character.height}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm text-gray-500">体重</div>
                  <div className="font-semibold text-gray-900">{character.weight}</div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">解説</h2>
                <p className="text-gray-700 leading-relaxed">
                  {character.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="text-3xl font-bold text-gray-900">{character.height}</div>
            <div className="text-sm text-gray-500 mt-1">身長</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
            <div className="text-3xl font-bold text-gray-900">{character.weight}</div>
            <div className="text-sm text-gray-500 mt-1">体重</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center col-span-2">
            <div className="text-xl font-bold text-gray-900">{character.series}</div>
            <div className="text-sm text-gray-500 mt-1">登場作品</div>
          </div>
        </div>
      </div>
    </div>
  );
}
