import { useOutletContext } from "react-router-dom";
import { NotesGrid } from "../components/NotesGrid";
import { useNotes } from "../hooks/useNotes";

export default function HomePage() {
  const { creatingNote, toggleCreatingNote } = useOutletContext<{
    toggleCreatingNote: () => void;
    creatingNote: boolean;
  }>();

  const { notes } = useNotes();

  return (
    <main className={`min-h-dvh flex flex-col justify-center`}>
      {creatingNote && (
        <button
          onClick={toggleCreatingNote}
          className={"block absolute inset-0 bg-black/50 z-20"}
        />
      )}

      <h1 className="text-4xl font-bold mb-8">Welcome to Notes!</h1>

      <h2 className="mb-4 mt-8 text-3xl">Notes</h2>
      {notes && notes.length > 1 ? (
        <NotesGrid items={notes} />
      ) : (
        <div className="h-16 border flex text-neutral-500 items-center justify-center py-16 rounded-lg">
          <p>Your Notes will show up here</p>
        </div>
      )}
    </main>
  );
}
