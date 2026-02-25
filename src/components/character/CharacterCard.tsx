import { Link } from 'react-router-dom';
import type { Character } from '../../types';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
    >
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `
              <div class="flex flex-col items-center justify-center w-full h-full text-gray-400">
                <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-sm font-medium">${character.name}</span>
              </div>
            `;
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
          {character.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{character.series}</p>
        <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
          <span>{character.height}</span>
          <span>•</span>
          <span>{character.weight}</span>
        </div>
      </div>
    </Link>
  );
}
