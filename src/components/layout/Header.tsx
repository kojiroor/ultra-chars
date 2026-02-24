import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-red-600 text-white py-4 px-6">
      <Link to="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
        Ultra Character Viewer
      </Link>
    </header>
  );
}
