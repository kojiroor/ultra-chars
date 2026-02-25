import { useParams, Link } from 'react-router-dom';
import { getCharacterById } from '../data/characters';

export function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const character = id ? getCharacterById(id) : undefined;

  if (!character) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">キャラクターが見つかりません</h1>
          <p className="text-gray-500 mb-6">指定されたキャラクターは存在しません</p>
          <Link
            to="/characters"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Link */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <Link
          to="/characters"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          一覧に戻る
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-2/5 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
              <img
                src={character.image}
                alt={character.name}
                className="w-full max-w-sm aspect-square object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23f3f4f6" width="100" height="100"/><text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="40">U</text></svg>';
                }}
              />
            </div>

            {/* Info Section */}
            <div className="md:w-3/5 p-8 md:p-10">
              {/* Series Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
                {character.series}
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                {character.name}
              </h1>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {character.height && (
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-sm text-gray-500 mb-1">身長</div>
                    <div className="text-xl font-semibold text-gray-900">{character.height}</div>
                  </div>
                )}
                {character.weight && (
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-sm text-gray-500 mb-1">体重</div>
                    <div className="text-xl font-semibold text-gray-900">{character.weight}</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="border-t border-gray-100 pt-6">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  概要
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {character.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
