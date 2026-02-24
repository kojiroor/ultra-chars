import { Link } from 'react-router-dom';

export function TopPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ULTRA CHARACTER VIEWER
        </h1>
        <p className="text-gray-600 mb-8">
          ウルトラマンキャラクターを閲覧できるサイト
        </p>
        <Link
          to="/characters"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          キャラクター一覧へ
        </Link>
      </div>
    </div>
  );
}
