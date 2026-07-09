import InteractionForm from "./components/InteractionForm";
import ChatPanel from "./components/ChatPanel";

function App() {
  return (
    <div className="h-screen bg-gray-100 p-6">

      <div className="grid grid-cols-12 gap-6 h-full">

        {/* Left Form */}
        <div className="col-span-8 h-full overflow-y-auto">
          <InteractionForm />
        </div>

        {/* Right AI Assistant */}
        <div className="col-span-4 sticky top-6 self-start">
          <ChatPanel />
        </div>

      </div>

    </div>
  );
}

export default App;