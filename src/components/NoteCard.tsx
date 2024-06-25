import { PenIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useNotes } from "../hooks/useNotes";
import { Note } from "../lib/definitions";

type NoteCardProps = Note;

export const NoteCard = ({ title, date, id, body }: NoteCardProps) => {
  const { deleteNotes } = useNotes();

  function deleteNote() {
    deleteNotes([id]);
  }

  return (
    <div className="md:max-w-md p-4 border rounded-lg relative">
      <h3 className="text-2xl text-balance font-semibold ">{title}</h3>
      <p className="text-xs mb-3 text-neutral-500">Created: {date}</p>
      <p className="border-l-4 px-2 text-pretty">
        <span className="line-clamp-2">{body}</span>
        <Link
          className="text-sm text-blue-500 hover:underline"
          to={`/notes/${id}`}
        >
          Continue Reading
        </Link>
      </p>

      <div
        className="z-10 absolute flex items-center gap-2 top-4 right-4 "
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          className="bg-white inline-block text-blue-500 p-2 rounded-md drop-shadow-md"
          to={`/notes/${id}/edit`}
        >
          <PenIcon size={16} />
        </Link>
        <button
          className="bg-white text-red-500 inline-block p-2 rounded-md drop-shadow-md"
          onClick={deleteNote}
        >
          <span className="sr-only">Delete {title}</span>
          <Trash2Icon size={16} />
        </button>
      </div>
    </div>
  );
};
