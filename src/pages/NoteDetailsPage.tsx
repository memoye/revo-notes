import { Link, useParams } from "react-router-dom";
import { useNotes } from "../hooks/useNotes";
import { MoveLeft, PenIcon, Trash2Icon } from "lucide-react";

export default function NoteDetailsPage() {
  const { id } = useParams();
  const { notes } = useNotes();

  const note = notes.find(({ id: NoteId }) => NoteId === id);

  const { deleteNotes } = useNotes();

  return (
    <main className="p-7">
      <h1 className="text-4xl mb-2 font-bold "> {note?.title}</h1>
      <p>Created: {note?.date}</p>

      <p className="m-2">{note?.body}</p>

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
    </main>
  );
}
