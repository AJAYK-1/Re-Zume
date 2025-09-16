const Filters = ({ setMinPrice, setMaxPrice }) => {
  return (
    <div className="flex gap-4 mb-4">
        
      <input
        type="number"
        placeholder="Minimum Price"
        onChange={(e) => setMinPrice(Number(e.target.value))}
        className="border p-2 rounded-3xl"
      />
      <input
        type="number"
        placeholder="Maximum Price"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="border p-2 rounded-3xl"
      />
    </div>
  );
};

export default Filters;
