import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getCharacterById } from '../data/characters';

export function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const character = id ? getCharacterById(id) : undefined;

  if (!character) {
    return (
      <main id="main-content" className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-xl">
              キャラクターが見つかりません
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              指定されたキャラクターは存在しません。
            </p>
            <Button asChild>
              <Link to="/characters">
                <ArrowLeft className="w-4 h-4" />
                キャラクター一覧へ
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-gray-50 py-6 md:py-8">
      <div className="container max-w-4xl">
        {/* パンくず */}
        <nav aria-label="パンくずリスト" className="mb-6">
          <Button variant="ghost" asChild className="text-sm text-muted-foreground hover:text-primary">
            <Link to="/characters">
              <ArrowLeft className="w-4 h-4" />
              キャラクター一覧に戻る
            </Link>
          </Button>
        </nav>

        {/* メインカード */}
        <Card className="overflow-hidden">
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
                      <svg class="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              <Badge variant="secondary" className="mb-2">
                {character.series}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {character.name}
              </h1>
              
              {/* スペック */}
              <section className="border-t border-gray-200 pt-4 mb-6">
                <h2 className="sr-only">基本情報</h2>
                <dl className="space-y-3">
                  <div className="flex">
                    <dt className="w-20 text-sm text-muted-foreground">身長</dt>
                    <dd className="text-sm font-medium text-gray-900">{character.height}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-20 text-sm text-muted-foreground">体重</dt>
                    <dd className="text-sm font-medium text-gray-900">{character.weight}</dd>
                  </div>
                </dl>
              </section>

              {/* 解説 */}
              <section className="border-t border-gray-200 pt-4">
                <h2 className="text-sm font-semibold text-muted-foreground mb-3">解説</h2>
                <p className="text-gray-700 leading-relaxed">
                  {character.description}
                </p>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
