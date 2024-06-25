import { Note } from "../lib/definitions";
import { NoteCard } from "./NoteCard";

type NotesGridProps = {
  items: Note[];
};

export const NotesGrid = ({ items }: NotesGridProps) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2">
      {items.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </div>
  );
};
