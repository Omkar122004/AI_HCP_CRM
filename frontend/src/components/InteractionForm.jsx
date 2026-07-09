import { useSelector, useDispatch } from "react-redux";

import {
  User,
  Calendar,
  Clock,
  Users,
  MessageSquare,
  FileText,
  Package,
  ClipboardCheck,
  CalendarDays,
  Search,
  Plus,
  Smile,
} from "lucide-react";

import InputField from "./InputField";
import SelectField from "./SelectField";
import TextArea from "./TextArea";
import RadioGroup from "./RadioGroup";

import { updateField } from "../features/interaction/interactionSlice";

export default function InteractionForm() {
  const dispatch = useDispatch();
  const interaction = useSelector((state) => state.interaction);

  return (
    <div className="bg-white rounded-2xl shadow-xl h-full overflow-y-auto p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        Log HCP Interaction
      </h1>
      {/* ============================= */}
      {/* Interaction Details */}
      {/* ============================= */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold mb-8 text-gray-700">
          Interaction Details
        </h2>

        <div className="grid grid-cols-2 gap-8">
          <InputField
            icon={<User size={18} />}
            label="HCP Name"
            placeholder="Search HCP..."
            value={interaction.hcpName}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "hcpName",
                  value: e.target.value,
                }),
              )
            }
          />

          <SelectField
            icon={<ClipboardCheck size={18} />}
            label="Interaction Type"
            options={["Meeting", "Call", "Email", "Conference"]}
            value={interaction.interactionType}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "interactionType",
                  value: e.target.value,
                }),
              )
            }
          />

          <InputField
            icon={<Calendar size={18} />}
            label="Date"
            type="date"
            value={interaction.meetingDate}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "meetingDate",
                  value: e.target.value,
                }),
              )
            }
          />

          <InputField
            icon={<Clock size={18} />}
            label="Time"
            placeholder="10:30 AM"
            value={interaction.meetingTime}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "meetingTime",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>

        <div className="mt-8">
          <InputField
            icon={<Users size={18} />}
            label="Attendees"
            placeholder="Enter attendees..."
            value={interaction.attendees}
            onChange={(e) =>
              dispatch(
                updateField({
                  field: "attendees",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>
      </div>
      {/* ============================= */}
      {/* Discussion */}
      {/* ============================= */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mt-8">
        <TextArea
          icon={<MessageSquare size={18} />}
          label="Topics Discussed"
          placeholder="Discussed Product X efficacy..."
          value={interaction.discussion}
          onChange={(e) =>
            dispatch(
              updateField({
                field: "discussion",
                value: e.target.value,
              }),
            )
          }
        />
      </div>

     
      {/* ============================= */}
      {/* Materials Shared / Samples */}
      {/* ============================= */}

      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-8">
          Materials Shared / Samples Distributed
        </h3>

        {/* ================= Materials ================= */}

        <div>
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-2 font-semibold text-lg text-gray-700">
              <FileText size={18} className="text-black" />
              Materials Shared
            </h4>

            <button
              className="
          flex
          items-center
          gap-2
          border
          border-gray-300
          rounded-lg
          px-4
          py-2
          text-sm
          text-blue-600
          hover:bg-blue-50
          transition
        "
            >
              <Search size={16} />
              Search/Add
            </button>
          </div>

          <div className="mt-5">
            {interaction.materials ? (
              <p className="text-gray-700">{interaction.materials}</p>
            ) : (
              <p className="text-gray-400">No materials added.</p>
            )}
          </div>

          <hr className="mt-6 border-gray-200" />
        </div>

        {/* ================= Samples ================= */}

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h4 className="flex items-center gap-2 font-semibold text-lg text-gray-700">
              <Package size={18} className="text-black" />
              Samples Distributed
            </h4>

            <button
              className="
          flex
          items-center
          gap-2
          border
          border-gray-300
          rounded-lg
          px-4
          py-2
          text-sm
          text-purple-600
          hover:bg-purple-50
          transition
        "
            >
              <Plus size={16} />
              Add Sample
            </button>
          </div>

          <div className="mt-5">
            {interaction.samples ? (
              <p className="text-gray-700">{interaction.samples}</p>
            ) : (
              <p className="text-gray-400">No samples added.</p>
            )}
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* Sentiment */}
      {/* ============================= */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mt-8">
        <RadioGroup
          label="Observed HCP Sentiment"
          value={interaction.sentiment}
          onChange={(value) =>
            dispatch(
              updateField({
                field: "sentiment",
                value,
              }),
            )
          }
        />
      </div>
      {/* ============================= */}
      {/* Outcome */}
      {/* ============================= */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mt-8">
        <TextArea
          icon={<ClipboardCheck size={18} />}
          label="Outcomes"
          placeholder="Key outcomes..."
          value={interaction.outcomes}
          onChange={(e) =>
            dispatch(
              updateField({
                field: "outcomes",
                value: e.target.value,
              }),
            )
          }
        />
      </div>
      {/* ============================= */}
      {/* Follow-up */}
      {/* ============================= */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 mt-8">
        <TextArea
          icon={<CalendarDays size={18} />}
          label="Follow-up Actions"
          placeholder="Next steps..."
          value={interaction.followUp}
          onChange={(e) =>
            dispatch(
              updateField({
                field: "followUp",
                value: e.target.value,
              }),
            )
          }
        />
      </div>
      {/* Button */}
      <button
        className="
          w-full
          mt-10
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-4
          rounded-xl
          text-lg
          font-semibold
          shadow-md
          transition
        "
      >
        Save Interaction
      </button>
    </div>
  );
}
