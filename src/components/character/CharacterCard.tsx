import { Link } from 'react-router-dom';
import type { Character } from '../../types';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `
              <div class="flex flex-col items-center justify-center w-full h-full text-gray-400 bg-gray-50">
                <div class="text-4xl font-bold text-[#005CAF] mb-2">${character.name.charAt(0)}</div>
                <span class="text-sm font-medium text-gray-600">${character.name}</span>
              </div>
            `;
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900">
          {character.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{character.series}</p>
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
          <span>{character.height}</span>
          <span>/</span>
          <span>{character.weight}</span>
        </div>
      </div>
    </Link>
  );
}
