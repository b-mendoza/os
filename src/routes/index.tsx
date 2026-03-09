import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexRoute,
  head() {
    return {
      meta: [
        {
          title: "Home | Spend Guard",
        },
      ],
    };
  },
});

function IndexRoute() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Spend Guard</h1>

      <p className="text-base-content/70">
        The previous intake flow has been removed while the app is repurposed.
      </p>

      <Link className="link" to="/wizard/categorization">
        Open the current wizard shell
      </Link>
    </div>
  );
}
