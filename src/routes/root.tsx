import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import { useFontStore } from "../stores/fontStore";

const queryClient = new QueryClient();

export default function Root() {
  const font = useFontStore((state) => state.font);

  let settledFont;

  switch (font) {
    case "Sans-Serif":
      settledFont = "font-sans";
      break;
    case "Serif":
      settledFont = "font-serif";
      break;
    case "Monospace":
      settledFont = "font-mono";
      break;
    default:
      break;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-white/95 text-black transition-colors">
        <div
          className={`mx-auto flex min-h-screen max-w-screen-md flex-col gap-6 px-10 py-12 ${settledFont}`}
        >
          <Navbar />
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
}
