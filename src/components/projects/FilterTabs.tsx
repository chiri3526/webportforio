import type { ProjectFilter } from "../../types/content";

type FilterTabsProps = {
  current: ProjectFilter;
  filters: ProjectFilter[];
  onChange: (filter: ProjectFilter) => void;
};

const getFilterLabel = (filter: ProjectFilter) => (filter === "all" ? "All" : filter.toUpperCase());

export function FilterTabs({ current, filters, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const active = current === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`rounded-full px-5 py-3 text-sm font-medium transition ${
              active ? "bg-accent text-white shadow-lg shadow-indigo-500/20" : "bg-[#edf1f5] text-slate-500 hover:bg-[#e4e8f0]"
            }`}
          >
            {getFilterLabel(filter)}
          </button>
        );
      })}
    </div>
  );
}
