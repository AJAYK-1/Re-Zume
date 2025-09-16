import { useState } from "react";
import { flights } from "./data/flights";
import FlightCard from "./Components/FlightCard";
import SortOptions from "./Components/SortOptions";
import Filters from "./Components/Filters";
import FlightForm from "./Components/FlightForm";

function App() {
  const [sortOption, setSortOption] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [search, setSearch] = useState({ from: "", to: "" });

  let filteredFlights = flights.filter((f) => {
    return (
      f.price >= minPrice &&
      f.price <= maxPrice &&
      (search.from === "" || f.from.toLowerCase().includes(search.from.toLowerCase())) &&
      (search.to === "" || f.to.toLowerCase().includes(search.to.toLowerCase()))
    );
  });

  if (sortOption) {
    filteredFlights.sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "duration") return a.duration - b.duration;
      if (sortOption === "departure")
        return a.departure.localeCompare(b.departure);
      return 0;
    });
  }

  return (
    <>
      <div className="text-center mb-6 bg-blue-200 py-5">
      <h1 className="text-2xl font-bold mb-6"> Flight Booking </h1>
      </div>
    <div className="p-6 max-w-4xl mx-auto">
      <FlightForm setSearch={setSearch} />
      <div className="flex justify-between items-center">
      <SortOptions setSortOption={setSortOption} />
      <Filters setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
      </div>
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight) => <FlightCard key={flight.id} flight={flight} />)
      ) : (
        <p>No flights found.</p>
      )}
    </div>
      </>
  );
}

export default App;