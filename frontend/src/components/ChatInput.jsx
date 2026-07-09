import { useState } from "react";
import { useDispatch } from "react-redux";
import { SendHorizontal } from "lucide-react";

import { sendMessage } from "../services/chatService";
import { updateInteraction } from "../features/interaction/interactionSlice";
import { addMessage } from "../features/chat/chatSlice";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleSend = async () => {
    if (!message.trim()) return;

    dispatch(
      addMessage({
        sender: "user",
        text: message,
      }),
    );

    try {
      const result = await sendMessage(message);

      console.log(result);

      const interaction = result.interaction || {};
      const toolResult = result.tool_result || {};

      // ---------------------------------------
      // Form Mapping
      // ---------------------------------------

      const mapping = {
        doctor_name: "hcpName",
        interaction_type: "interactionType",
        meeting_date: "meetingDate",
        meeting_time: "meetingTime",
        attendees: "attendees",
        discussion: "discussion",
        materials: "materials",
        samples: "samples",
        sentiment: "sentiment",
        outcomes: "outcomes",
        follow_up_date: "followUp",
      };

      const updates = {};

      Object.entries(mapping).forEach(([backendKey, frontendKey]) => {
        const value = interaction[backendKey];

        if (value !== undefined && value !== null && value !== "") {
          updates[frontendKey] = value;
        }
      });

      // ---------------------------------------
      // Update Form Only For These Tools
      // ---------------------------------------

      const updateFormIntent = {
        log_interaction: true,
        edit_interaction: true,
      };

      updateFormIntent[interaction.intent] &&
        dispatch(updateInteraction(updates));

      // ---------------------------------------
      // Search Result
      // ---------------------------------------

      const searchMessage =
        toolResult.results?.length > 0
          ? `🔍 HCP Search Results

${toolResult.results
  .map(
    (hcp) => `👨‍⚕️ ${hcp.name}
🏥 ${hcp.hospital || "N/A"}
🩺 ${hcp.specialization || "N/A"}`
  )
  .join("\n\n")}`
          : "❌ No HCP Found.";

      // ---------------------------------------
      // AI Messages
      // ---------------------------------------

      const toolMessages = {
        log_interaction: `✅ Interaction Logged Successfully!

The interaction with ${
          interaction.doctor_name || "the doctor"
        } has been recorded.

The details have been automatically populated in the form.

Would you like me to suggest a follow-up action?`,

        edit_interaction: `✏️ Interaction Updated Successfully!

The interaction for ${
          interaction.doctor_name || "the doctor"
        } has been updated successfully.

The latest details are now reflected in the form.`,

        search_hcp: searchMessage,

        summarize_interaction: `📝 Interaction Summary

${toolResult.summary || "No summary available."}`,

        suggest_followup: `📅 Suggested Follow-up

${toolResult.followup || "No follow-up recommendation available."}`,
      };

      dispatch(
        addMessage({
          sender: "ai",
          text:
            toolMessages[interaction.intent] ||
            toolResult.message ||
            "✅ Request completed successfully.",
        }),
      );

      setMessage("");
    } catch (error) {
      console.error(error);

      dispatch(
        addMessage({
          sender: "ai",
          text: "❌ Something went wrong while processing your request.",
        }),
      );
    }
  };

  return (
    <div className="flex items-end gap-3">
      <textarea
        rows={2}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe interaction..."
        className="
          flex-1
          resize-none
          rounded-xl
          border
          border-gray-300
          p-3
          outline-none
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          text-sm
        "
      />

      <button
        onClick={handleSend}
        className="
          flex
          items-center
          gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-4
          rounded-xl
          font-semibold
          transition
        "
      >
        <SendHorizontal size={18} />
        AI Log
      </button>
    </div>
  );
}