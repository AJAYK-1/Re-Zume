const SortOptions = ({ setSortOption }) => {
  return (
    <select
      onChange={(e) => setSortOption(e.target.value)}
      className="border rounded-3xl p-2 mb-4"
    >
      <option value="">Sort</option>
      <option value="price-asc">Price: Low - High</option>
      <option value="price-desc">Price: High - Low</option>
      <option value="duration">Duration</option>
      <option value="departure">Departure Time</option>
    </select>
  );
};

export default SortOptions;
