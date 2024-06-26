import { Link, useParams } from "react-router-dom";
import { useNotes } from "../hooks/useNotes";
import { MoveLeft, PenIcon, Trash2Icon } from "lucide-react";

export default function NoteDetailsPage() {
  const { id } = useParams();
  const { notes } = useNotes();

  const note = notes.find(({ id: NoteId }) => NoteId === id);

  const { deleteNotes } = useNotes();

  return (
    <main className="p-7 flex flex-col min-h-dvh">
      <div
        className="flex items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          className="bg-white  inline-flex items-center gap-2 text-blue-500 p-2 rounded-md drop-shadow-md"
          to={`/notes/${id}/edit`}
        >
          <PenIcon size={16} /> Edit
        </Link>
        <button
          className="bg-white   inline-flex items-center gap-2  text-red-500  p-2 rounded-md drop-shadow-md"
          onClick={() => deleteNotes([note?.id as string])}
        >
          <span className="sr-only">Delete {note?.title}</span>
          <Trash2Icon size={16} /> Delete
        </button>
        <Link
          className="bg-white  inline-flex items-center gap-2 text-blue-500 p-2 rounded-md drop-shadow-md"
          to={`/`}
        >
          <MoveLeft size={16} /> Back
        </Link>
      </div>

      <h1 className="text-4xl mb-2 font-bold mt-12"> {note?.title}</h1>
      <p className="text-sm text-neutral-500">Created: {note?.date}</p>

      <p className="py-6 flex-1">{note?.body}</p>

      <h2 className="mb-4 mt-8 text-3xl">Notes</h2>
      {notes && notes.length > 0 &&
        <NotesGrid items={notes} />
      }
    </main>
  );
}
