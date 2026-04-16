import { useState } from "react";
import HoldingRow from "./HoldingRow";

export default function HoldingsTable({ data, selected, toggle, toggleAll }) {
  const [visibleCount, setVisibleCount] = useState(5); // show first 5 rows
  const allSelected = data.length === selected.length;
  const visibleData = data.slice(0, visibleCount);
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleViewLess = () => {
    setVisibleCount(5);
  };

  return (
    <div className="bg-[#131825] rounded-2xl p-4 mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                />
              </th>
              <th className="text-left">Asset</th>
              <th>Holdings</th>
              <th>Current Price</th>
              <th>Short-Term</th>
              <th>Long-Term</th>
              <th>Amount to Sell</th>
            </tr>
          </thead>

          <tbody>
            {visibleData.map((asset) => (
              <HoldingRow
                key={asset.coin}
                asset={asset}
                selected={selected}
                toggle={toggle}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* View More / View Less */}
      <div className="flex justify-center mt-4">
        {visibleCount < data.length ? (
          <button
            onClick={handleViewMore}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm"
          >
            View More
          </button>
        ) : (
          data.length > 8 && (
            <button
              onClick={handleViewLess}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm"
            >
              View Less
            </button>
          )
        )}
      </div>
    </div>
  );
}
