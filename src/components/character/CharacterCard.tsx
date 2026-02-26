import { Link } from 'react-router-dom';
import type { Character } from '../../types';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="card group block"
      aria-label={`${character.name}の詳細を見る`}
    >
      <div 
        className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden"
        role="img"
        aria-label={character.name}
      >
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `
              <div class="flex flex-col items-center justify-center w-full h-full text-gray-400 p-4">
                <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-sm font-medium text-center">${character.name}</span>
              </div>
            `;
          }}
        />
      </div>
      <div className="card-body">
        <h3 className="font-bold text-gray-900 group-hover:text-[#005CAF] transition-colors">
          {character.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{character.series}</p>
        <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
          <span>{character.height}</span>
          <span aria-hidden="true">|</span>
          <span>{character.weight}</span>
        </div>
      </div>
    </Link>
  );
}
