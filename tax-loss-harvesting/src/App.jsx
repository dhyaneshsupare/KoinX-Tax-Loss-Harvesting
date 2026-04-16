import { useState, useMemo } from "react";
import { HOLDINGS, CAPITAL_GAINS } from "./data/mockData";
import CapitalGainsCard from "./components/CapitalGainsCard";
import HoldingsTable from "./components/HoldingsTable";
import { applyHarvesting, calculateGains } from "./utils/calculations";

export default function App() {
  const [selected, setSelected] = useState([]);

  const toggle = (asset) => {
    setSelected((prev) => {
      const exists = prev.find((a) => a.coin === asset.coin);
      if (exists) return prev.filter((a) => a.coin !== asset.coin);
      return [...prev, asset];
    });
  };

  const toggleAll = () => {
    if (selected.length === HOLDINGS.length) {
      setSelected([]);
    } else {
      setSelected(HOLDINGS);
    }
  };

  const updated = useMemo(
    () => applyHarvesting(CAPITAL_GAINS, selected),
    [selected],
  );

  const pre = calculateGains(CAPITAL_GAINS);
  const post = calculateGains(updated);

  const savings = pre.total - post.total;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Tax Optimisation</h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <CapitalGainsCard title="Pre Harvesting" data={CAPITAL_GAINS} />
        <CapitalGainsCard title="After Harvesting" data={updated} highlight />
      </div>


      {/* Table */}
      <HoldingsTable
        data={HOLDINGS}
        selected={selected}
        toggle={toggle}
        toggleAll={toggleAll}
      />
    </div>
  );
}
