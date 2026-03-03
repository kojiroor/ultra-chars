import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Character } from '../../types';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="block"
      aria-label={`${character.name}の詳細を見る`}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div 
          className="aspect-square bg-muted flex items-center justify-center overflow-hidden"
          role="img"
          aria-label={character.name}
        >
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `
                <div class="flex flex-col items-center justify-center w-full h-full text-muted-foreground p-4">
                  <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span class="text-sm font-medium text-center">${character.name}</span>
                </div>
              `;
            }}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg leading-none tracking-tight">
            {character.name}
          </h3>
          <Badge variant="secondary" className="mt-2">
            {character.series}
          </Badge>
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span>{character.height}</span>
            <span aria-hidden="true">|</span>
            <span>{character.weight}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
