import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContextProvider";

export function useNotes() {
  const context = useContext(NotesContext);
  const [creatingNote, setCreatingNote] = useState(false);

  if (!context) {
    throw new Error("useNotes must be used within a NotesContextProvider");
  }

  return { ...context, creatingNote, setCreatingNote };
}
