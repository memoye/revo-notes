import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import NoteEditPage from "./pages/NoteEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/notes/:id",
        element: <NoteDetailsPage />,
      },
      {
        path: "/notes/:id/edit",
        element: <NoteEditPage />,
      },
    ],
  },
]);

export default router;
