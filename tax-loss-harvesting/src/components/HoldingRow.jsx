export default function HoldingRow({ asset, selected, toggle }) {
  const isSelected = selected.some((a) => a.coin === asset.coin);

  const gainColor = (val) => (val >= 0 ? "text-green-400" : "text-red-400");

  return (
    <tr className="border-b border-gray-800 hover:bg-[#1A2235]">
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggle(asset)}
        />
      </td>

      <td className="flex items-center gap-2 py-3">
        <img src={asset.logo} className="w-6 h-6" />
        <div>
          <p className="font-medium">{asset.coin}</p>
          <p className="text-xs text-gray-400">{asset.coinName}</p>
        </div>
      </td>

      <td className="text-center">
        {asset.totalHolding}
        <div className="text-xs text-gray-400">
          Avg ${asset.averageBuyPrice}
        </div>
      </td>

      <td className="text-center">${asset.currentPrice}</td>

      <td className={`text-center ${gainColor(asset.stcg.gain)}`}>
        ${asset.stcg.gain}
      </td>

      <td className={`text-center ${gainColor(asset.ltcg.gain)}`}>
        ${asset.ltcg.gain}
      </td>

      <td className="text-center">{isSelected ? asset.totalHolding : "-"}</td>
    </tr>
  );
}
