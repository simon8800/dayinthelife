import App from "./App";
import AuthorPage from "./components/pages/AuthorPage"
import ProfilePage from "./components/pages/ProfilePage"
import BlogPage from "./components/pages/BlogPage"
import ErrorPage from "./components/pages/ErrorPage";

// Children require a path and an element
// Create a <Link to=<path> /> to path

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/author/:username",
    element: <AuthorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogPage />,
    errorElement: <ErrorPage />
  },
];

export default routes;
