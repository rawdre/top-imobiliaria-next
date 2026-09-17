export type RegionStat = {
  value: string;
  label: string;
};

type RegionStatsProps = {
  stats: RegionStat[];
  note: string;
  ariaLabel: string;
};

/** Visual indicator block shared by the strategic regional guides. */
export default function RegionStats({ stats, note, ariaLabel }: RegionStatsProps) {
  return (
    <section className="region-stats-wrap" aria-label={ariaLabel}>
      <div className="region-stat-grid">
        {stats.map((stat) => (
          <div key={`${stat.value}-${stat.label}`}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <p className="region-stat-note">{note}</p>
    </section>
  );
}
