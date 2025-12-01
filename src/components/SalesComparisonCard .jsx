import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

const SalesComparisonCard = ({
  title = "Sales",
  subtitle = "Week comparison",
  value = "1.345",
  trend = "up",
  progress = 65,
  progressColor = "green",
}) => {
  const isPositive = trend === "up";

  // Progress bar color classes
  const progressColors = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    indigo: "bg-indigo-500",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="mb-4">
          <h2 className="text-xs font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        {/* Main Value with Trend Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-md font-bold text-gray-900">{value}</span>
          <div
            className={`flex items-center ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? (
              <MdArrowUpward className="w-4 h-4" />
            ) : (
              <MdArrowDownward className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {isPositive ? "↑" : "↓"}
            </span>
          </div>
        </div>
      </div>
      {/* Progress Bar with Percentage */}
      <div className="space-y-2">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className={`h-1 rounded-full transition-all duration-300 ${progressColors[progressColor]}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SalesComparisonCard;
