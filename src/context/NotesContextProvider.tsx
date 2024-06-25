import { ReactNode, useState } from "react";
import { Note } from "../lib/definitions";
import { getFromLocalStorage } from "../lib/utils";
import { NotesContext } from "./NoteContextProvider";

export function NotesContextProvider({ children }: { children: ReactNode }) {
  const savedNotes: Note[] = getFromLocalStorage("notes") ?? null;

  const [
    notes,
    // setNotes
  ] = useState<Note[]>(savedNotes);

  function createNote(note: Note) {}

  function updateNote(id: string) {
    console.log(id);
  }

  function deleteNotes(notes: string[]) {
    console.log(notes);
  }

  return (
    <NotesContext.Provider
      value={{ notes, createNote, updateNote, deleteNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
}
