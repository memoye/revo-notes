import { useParams } from "react-router-dom";
import { CreateNoteForm } from "../components/CreateNoteForm";
import { useNotes } from "../hooks/useNotes";

export default function NoteEditPage() {
  const { notes } = useNotes();

  const { id } = useParams();
  const note = notes.find((nt) => nt.id === id);

  return (
    <CreateNoteForm
      closeForm={() => {}}
      prevbody={note?.body}
      previd={note?.id}
      prevtitle={note?.title}
      date={note?.date}
      creating={false}
    />
  );
}
