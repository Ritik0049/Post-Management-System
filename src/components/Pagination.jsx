import React from 'react'


function Pagination({ page, totalPages, onPrev, onNext }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button onClick={onPrev} disabled={page === 1} className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50">Prev</button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={onNext} disabled={page === totalPages} className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50">Next</button>
    </div>
  );
}

export default Pagination