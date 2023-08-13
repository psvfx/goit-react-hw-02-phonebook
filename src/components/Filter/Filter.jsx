export const Filter = ({ filter, onFilterChange }) => (
  <input
    type="text"
    placeholder="Search by name"
    value={filter}
    onChange={onFilterChange}
  />
);
