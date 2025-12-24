import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type PaginationProps = {
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
};

export function Pagination({
  totalPages = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange && onPageChange(currentPage - 1);
    }
  };

  const handlePageChange = (page: number) => {
    onPageChange && onPageChange(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange && onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between w-full text-sm text-gray-400 pt-5 px-4">
      {/* Previous */}
      {totalPages > 1 && (
        <button
          className="flex items-center text-gray-600 gap-2"
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          <ArrowLeft className="size-3.5" />
          <span className="text-xs font-semibold">Previous</span>
        </button>
      )}
      {/* Page numbers */}
      <div className="flex items-center gap-2">
        {totalPages > 1 &&
          Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  'size-10 rounded-lg flex items-center justify-center text-gray-800 font-medium text-xs',
                  page === currentPage && 'bg-gray-50'
                )}
              >
                {page}
              </button>
            )
          )}
      </div>

      {/* Next */}
      {totalPages > 1 && (
        <button
          className="flex items-center text-gray-600 gap-2"
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          <span className="text-xs font-semibold">Next</span>
          <ArrowRight className="size-3.5" />
        </button>
      )}
    </div>
  );
}
