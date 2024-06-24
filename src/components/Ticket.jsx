const Ticket = ({ packageName, price }) => {
    return (
        <div className="bg-zinc-200 border-2 border-zinc-400 shadow-md rounded px-6 py-4">
            <h2 className="text-2xl font-bold mb-4">{packageName}</h2>
            <p className="text-gray-600 mb-6">
                All VIP benefits plus backstage access.
            </p>
            <div className="flex justify-between mb-6">
                <div className="text-lg font-bold">${price}/mo</div>
                <button className="bg-zinc-800 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                </button>
            </div>
            <ul className="list-none mb-0">
                <li className="flex items-center mb-2">
                    <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    All VIP Pass Benefits
                </li>
                <li className="flex items-center mb-2">
                    <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    Backstage Access
                </li>
                <li className="flex items-center">
                    <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    Meet-and-Greet with Artists
                </li>
            </ul>
        </div>
    );
};

export default Ticket;
