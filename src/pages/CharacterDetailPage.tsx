import { useParams, Link } from 'react-router-dom';
import { getCharacterById } from '../data/characters';

export function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const character = id ? getCharacterById(id) : undefined;

  if (!character) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">キャラクターが見つかりません</h1>
          <Link to="/characters" className="text-red-600 hover:underline">
            一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/characters" className="text-red-600 hover:underline mb-4 inline-block">
          ← 一覧に戻る
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{character.name}</h1>
              
              <div className="space-y-2 text-gray-600 mb-6">
                {character.series && (
                  <p><span className="font-semibold">初登場:</span> {character.series}</p>
                )}
                {character.height && (
                  <p><span className="font-semibold">身長:</span> {character.height}</p>
                )}
                {character.weight && (
                  <p><span className="font-semibold">体重:</span> {character.weight}</p>
                )}
              </div>

              <div className="border-t pt-4">
                <h2 className="font-semibold text-gray-900 mb-2">解説</h2>
                <p className="text-gray-600">{character.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
