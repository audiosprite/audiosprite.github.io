import { useState } from 'react';

const useSort = (initialSort = { column: 'fieldName', reverse: false }) => {
  const [sortBy, setSortBy] = useState(initialSort);

  const handleSort = (fieldName: string) => {
    if (sortBy.column === fieldName)
      setSortBy({ ...sortBy, reverse: !sortBy.reverse });
    else setSortBy({ column: fieldName, reverse: false });
  };

  return { handleSort, sortBy };
};

export default useSort;
