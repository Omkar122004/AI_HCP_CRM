export default function InputField({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">

      <label className="flex items-center gap-2 text-gray-700 font-semibold">

        {icon}

        {label}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          border
          border-gray-300
          bg-gray-50
          rounded-xl
          px-4
          py-3
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