import { useParams, Link } from 'react-router-dom';
import { getCharacterById } from '../data/characters';

export function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const character = id ? getCharacterById(id) : undefined;

  if (!character) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-center bg-white rounded-lg p-8 border border-gray-200 max-w-md mx-4">
          <h1 className="text-xl font-bold text-gray-900 mb-2">キャラクターが見つかりません</h1>
          <p className="text-gray-500 mb-6">指定されたキャラクターは存在しません。</p>
          <Link
            to="/characters"
            className="inline-flex items-center gap-2 text-[#005CAF] hover:text-[#004A8C] font-medium"
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
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* パンくず */}
        <nav className="mb-6">
          <Link
            to="/characters"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#005CAF] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            キャラクター一覧に戻る
          </Link>
        </nav>

        {/* メインカード */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="md:flex">
            {/* 画像 */}
            <div className="md:w-1/2 aspect-square md:aspect-auto bg-gray-100 flex items-center justify-center p-6 md:p-8">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full max-w-sm object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex flex-col items-center justify-center w-full h-full text-gray-300">
                      <svg class="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span class="text-lg font-medium">${character.name}</span>
                    </div>
                  `;
                }}
              />
            </div>

            {/* 情報 */}
            <div className="md:w-1/2 p-6 md:p-8">
              <span className="text-sm font-medium text-[#005CAF] mb-2 block">{character.series}</span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {character.name}
              </h1>
              
              {/* スペック */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <h2 className="text-sm font-semibold text-gray-500 mb-3">基本情報</h2>
                <dl className="space-y-3">
                  <div className="flex">
                    <dt className="w-20 text-sm text-gray-500">身長</dt>
                    <dd className="text-sm font-medium text-gray-900">{character.height}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-20 text-sm text-gray-500">体重</dt>
                    <dd className="text-sm font-medium text-gray-900">{character.weight}</dd>
                  </div>
                </dl>
              </div>

              {/* 解説 */}
              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-sm font-semibold text-gray-500 mb-3">解説</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
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
