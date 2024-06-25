import { Outlet } from "react-router-dom";
import { CreateNoteForm } from "./components/CreateNoteForm";

import { PlusIcon } from "lucide-react";
import { useNotes } from "./hooks/useNotes";

function App() {
  const { creatingNote, setCreatingNote } = useNotes();

  function toggleCreatingNote() {
    setCreatingNote((prev) => !prev);
  }

  return (
    <div className="px-8 box-border">
      <Outlet context={{ toggleCreatingNote, creatingNote }} />

      {creatingNote && (
        <CreateNoteForm closeForm={() => setCreatingNote(false)} />
      )}

      <button
        onClick={toggleCreatingNote}
        className="flex text-white items-center gap-2  bg-orange-500 rounded-md px-4 py-2 fixed right-8 bottom-8 font-semibold"
      >
        <span>
          <PlusIcon />
        </span>
        <span>Create Note</span>
      </button>
    </div>
  );
}

export default App;
