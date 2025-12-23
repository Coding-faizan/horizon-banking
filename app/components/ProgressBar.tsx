export const ProgressBar = ({
  progress,
  progressBgColor = 'bg-gray-200',
  progressFillColor = 'bg-blue-700',
}: {
  progress: number;
  progressBgColor?: string;
  progressFillColor?: string;
}) => {
  return (
    <div
      className={`w-full h-2 ${progressBgColor} rounded-full overflow-hidden`}
    >
      <div
        className={`h-2 rounded-full ${progressFillColor}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
