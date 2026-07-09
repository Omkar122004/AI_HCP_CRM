import { Mic } from "lucide-react";

export default function VoiceNote() {
  return (
    <div className="mt-3">
      <button
        className="
          flex
          items-center
          gap-2
          text-blue-600
          hover:text-blue-700
          text-sm
          font-medium
          transition
        "
      >
        <Mic size={16} />

        <span>
          Summarize from Voice Note
          <span className="text-gray-500 font-normal"> (Requires Consent)</span>
        </span>
      </button>
    </div>
  );
}
