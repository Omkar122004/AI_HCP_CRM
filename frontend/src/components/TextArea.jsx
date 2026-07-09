export default function TextArea({
  label,
  icon,
  placeholder,
  rows = 4,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      {/* Label */}

      <label className="flex items-center gap-2 text-gray-700 font-semibold">
        {icon}

        {label}
      </label>

      {/* TextArea */}

      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          border
          border-gray-300
          bg-gray-50
          rounded-xl
          p-4
          resize-none
          outline-none
          transition
          duration-200
          focus:bg-white
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
        "
      />
    </div>
  );
}
