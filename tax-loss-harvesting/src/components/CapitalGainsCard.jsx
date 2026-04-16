import { calculateGains } from "../utils/calculations";

const format = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);

export default function CapitalGainsCard({ title, data, highlight }) {
  const stcgNet = data.stcg.profits - data.stcg.losses;
  const ltcgNet = data.ltcg.profits - data.ltcg.losses;
  const total = stcgNet + ltcgNet;

  const textColor = (val) => (val >= 0 ? "text-green-400" : "text-red-400");

  return (
    <div
      className={`rounded-2xl p-6 w-full ${
        highlight
          ? "bg-gradient-to-r from-blue-500 to-blue-700"
          : "bg-[#131825]"
      }`}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold mb-6">{title}</h2>

      {/* Header Row */}
      <div className="grid grid-cols-3 text-gray-400 text-sm mb-4">
        <div></div>
        <div className="text-center">Short-term</div>
        <div className="text-center">Long-term</div>
      </div>

      {/* Profits */}
      <div className="grid grid-cols-3 mb-3">
        <div className="text-gray-400">Profits</div>
        <div className="text-center">{format(data.stcg.profits)}</div>
        <div className="text-center">{format(data.ltcg.profits)}</div>
      </div>

      {/* Losses */}
      <div className="grid grid-cols-3 mb-3">
        <div className="text-gray-400">Losses</div>
        <div className="text-center">{format(data.stcg.losses)}</div>
        <div className="text-center">{format(data.ltcg.losses)}</div>
      </div>

      {/* Net Capital Gains */}
      <div className="grid grid-cols-3 mb-5 font-medium">
        <div className="text-gray-400">Net Capital Gains</div>
        <div className={`text-center ${textColor(stcgNet)}`}>
          {format(stcgNet)}
        </div>
        <div className={`text-center ${textColor(ltcgNet)}`}>
          {format(ltcgNet)}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
        <span className="text-gray-300 font-medium">
          {highlight ? "Effective Capital Gains:" : "Realised Capital Gains:"}
        </span>

        <span className={`text-xl font-semibold ${textColor(total)}`}>
          {format(total)}
        </span>
      </div>
    </div>
  );
}
