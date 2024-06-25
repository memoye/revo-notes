import { useState } from "react";
import { Note } from "../lib/definitions";
import { useNotes } from "../hooks/useNotes";
import { useNavigate } from "react-router-dom";

export const CreateNoteForm = ({
  closeForm,
  prevtitle = "",
  prevbody = "",
  previd = "",
  creating = true,
  date,
}: {
  closeForm: () => void;
  prevtitle?: string;
  creating?: boolean;
  prevbody?: string;
  previd?: string;
  date?: string;
}) => {
  const [title, setTitle] = useState(prevtitle);
  const [body, setBody] = useState(prevbody);

  const [error, setError] = useState<string | null>(null);

  const { createNote, updateNote } = useNotes();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title) {
      setError("Please enter a title");
      return;
    }

    const payload: Note = {
      id: previd ? previd : crypto.randomUUID(),
      date: date ? date : new Date(Date.now()).toUTCString(),
      title,
      body,
    };

    creating ? createNote(payload) : updateNote(payload);
    creating ? closeForm() : navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:max-w-lg z-50 backdrop-blur-lg max-w-xl rounded-lg bg-orange-500 p-4"
    >
      {error && (
        <div className="bg-red-500 mb-4 font-medium p-4 rounded-md">
          {error}
        </div>
      )}
      <h2 className="text-3xl text-white mb-4">Create Note</h2>
      <div className="flex flex-col w-full mb-4">
        <label
          className="font-medium text-gray-300 text-sm mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          className="border border-slate-500 font-semibold placeholder:font-normal py-2 px-4 rounded-md "
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title for your note"
        />
      </div>
      <div>
        <textarea
          id="body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Start typing..."
          className="w-full border-slate-500 border py-2 px-4 rounded-md placeholder:italic"
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            creating ? closeForm() : navigate(-1);
          }}
          className="border-black text-white px-4 py-2 rounded-md font-semibold"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="focus:border-red bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
        >
          Save
        </button>
      </div>
    </form>
  );
};
