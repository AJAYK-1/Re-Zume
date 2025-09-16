import { useState } from "react";

const FlightForm = ({ setSearch }) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const handleChange = (field, value) => {
        if (field === "from") setFrom(value);
        if (field === "to") setTo(value);

        setSearch((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="flex gap-3 mb-6 items-center bg-slate-200 p-4 rounded-3xl">
            <h1 className="text-2xl font-mono">Destination:</h1>
            <input
                type="text"
                placeholder="From"
                value={from}
                onChange={(e) => handleChange("from", e.target.value)}
                className="border p-2 rounded-3xl"
            />
            <input
                type="text"
                placeholder="To"
                value={to}
                onChange={(e) => handleChange("to", e.target.value)}
                className="border p-2 rounded-3xl"
            />
        </div>
    );
};

export default FlightForm;