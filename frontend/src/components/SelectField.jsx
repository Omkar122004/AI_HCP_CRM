import { ChevronDown } from "lucide-react";

export default function SelectField({ label, icon, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Label */}

      <label className="flex items-center gap-2 text-gray-700 font-semibold">
        {icon}

        {label}
      </label>

      {/* Select */}

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="
            w-full
            appearance-none
            border
            border-gray-300
            bg-gray-50
            rounded-xl
            px-4
            py-3
            pr-12
            outline-none
            transition
            duration-200
            focus:bg-white
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        >
          <option value="">Select Interaction</option>

          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-500
            pointer-events-none
          "
        />
      </div>
    </div>
  );
}
