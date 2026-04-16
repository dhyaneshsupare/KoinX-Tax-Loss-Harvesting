//Arrow Function to calculate gains or losses from customer.
export const calculateGains = (cg) => {
  const stcgNet = cg.stcg.profits - cg.stcg.losses;
  const ltcgNet = cg.ltcg.profits - cg.ltcg.losses;

  return {
    stcgNet,
    ltcgNet,
    total: stcgNet + ltcgNet,
  };
};

//Main task for the Assessment.
export const applyHarvesting = (initial, selected) => {
  const updated = JSON.parse(JSON.stringify(initial));

  selected.forEach((asset) => {
    if (asset.stcg.gain > 0) {
      updated.stcg.profits += asset.stcg.gain;
    } else {
      updated.stcg.losses += Math.abs(asset.stcg.gain);
    }

    if (asset.ltcg.gain > 0) {
      updated.ltcg.profits += asset.ltcg.gain;
    } else {
      updated.ltcg.losses += Math.abs(asset.ltcg.gain);
    }
  });

  return updated;
};
