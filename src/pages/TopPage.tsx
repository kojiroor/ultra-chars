import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function TopPage() {
  return (
    <main 
      id="main-content"
      className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16 px-4"
    >
      <div className="text-center max-w-2xl mx-auto">
        {/* Hero */}
        <div 
          className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-8"
          aria-hidden="true"
        >
          <span className="text-white text-4xl">●</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          ウルトラマン図鑑
        </h1>
        
        <p className="text-lg text-muted-foreground mb-2">
          Ultra Character Viewer
        </p>
        
        <p className="text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
          昭和から最新作まで、歴代ウルトラマンの情報を網羅したデータベースです。
          光の国の戦士たちの物語を探求しましょう。
        </p>
        
        <Button asChild size="lg" className="text-lg px-8">
          <Link to="/characters">
            キャラクター一覧へ
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
        
        {/* Stats */}
        <dl className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div>
            <dt className="text-sm text-muted-foreground mb-1">キャラクター</dt>
            <dd className="text-3xl font-bold text-gray-900">24+</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground mb-1">年の歴史</dt>
            <dd className="text-3xl font-bold text-gray-900">50+</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground mb-1">勇気</dt>
            <dd className="text-3xl font-bold text-gray-900">∞</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
