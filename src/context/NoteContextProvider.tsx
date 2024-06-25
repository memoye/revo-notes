import { ReactNode, createContext, useEffect, useState } from "react";
import { Note } from "../lib/definitions";
import { getFromLocalStorage, saveToLocalStorage } from "../lib/utils";

type NotesContextType = {
  notes: Note[];
  createNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNotes: (notes: string[]) => void;
  // selectedNotes
};

export const NotesContext = createContext<NotesContextType | null>(null);

export function NotesContextProvider({ children }: { children: ReactNode }) {
  const savedNotes: Note[] = getFromLocalStorage("notes") ?? [];

  const [notes, setNotes] = useState<Note[]>(savedNotes);

  function createNote(note: Note) {
    if (notes) {
      setNotes((prev) => [...prev, note]);
    } else setNotes([note]);
  }

  function updateNote(note: Note) {
    const otherNotes = notes.filter(({ id }) => id !== note.id);
    const newNotes = [...otherNotes, note];
    setNotes(newNotes);
  }

  function deleteNotes(notesToDel?: string[]) {
    if (!notesToDel) return;
    const newNotes = notes.filter(({ id }) => !notesToDel.includes(id));
    setNotes(newNotes);
  }

  useEffect(() => {
    saveToLocalStorage("notes", notes);
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{ notes, createNote, updateNote, deleteNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
}
