export default function RadioGroup({ label, value, onChange }) {
  const options = [
    {
      label: "Positive",
      emoji: "😊",
      color: "text-green-600",
    },
    {
      label: "Neutral",
      emoji: "😐",
      color: "text-yellow-500",
    },
    {
      label: "Negative",
      emoji: "☹️",
      color: "text-red-500",
    },
  ];

  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-4">{label}</label>

      <div className="flex flex-wrap gap-10">
        {options.map((item) => (
          <label
            key={item.label}
            className="
              flex
              items-center
              gap-3
              cursor-pointer
            "
          >
            <input
              type="radio"
              name="sentiment"
              checked={value === item.label}
              onChange={() => onChange(item.label)}
              className="
                w-4
                h-4
                accent-blue-600
              "
            />

            <span className={`text-2xl ${item.color}`}>{item.emoji}</span>

            <span className="text-gray-700 font-medium">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
