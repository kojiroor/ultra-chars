interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="前のページ"
        className="px-4 py-2 bg-white border rounded disabled:opacity-50"
      >
        前へ
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-label={`ページ ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`px-4 py-2 border rounded ${
            page === currentPage ? 'bg-red-600 text-white' : 'bg-white'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="次のページ"
        className="px-4 py-2 bg-white border rounded disabled:opacity-50"
      >
        次へ
      </button>
    </div>
  );
}
