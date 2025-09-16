const FlightCard = ({ flight }) => {
    return (
        <div className="border- rounded-xl shadow p-4 flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <img src={flight.logo} alt={flight.airline} className="w-14 h-14 object-contain" />
                <div>
                    <h2 className="font-bold">{flight.airline} </h2>

                </div>
            </div>
            <div className="flex items-center gap-4">

                <div className="text-left">
                    <p className="text-sm text-gray-600">{flight.departure}</p>
                    <p className="font-semibold">{flight.from}</p>
                </div>

                <div className="flex border-b-2 w-70 border-gray-400 justify-center"> Total time: {flight.duration / 60} H</div>

                <div className="text-right">
                    <p className="text-sm text-gray-600">{flight.arrival}</p>
                    <p className="font-semibold">{flight.to}</p>
                </div>
            </div>

            <div className="text-right">
                <p className="text-lg font-bold"> ₹ {flight.price}</p>
                <button className="mt-2 px-3 py-1 bg-purple-400 text-white rounded-3xl">
                    Select +
                </button>
            </div>
        </div>
    );
};

export default FlightCard;
