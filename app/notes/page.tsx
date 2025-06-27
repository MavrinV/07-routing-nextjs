import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Notes() {
  const initialQuery = "";
  const initialPage = 1;

  const initialData = await fetchNotes(initialQuery, initialPage);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", initialQuery, initialPage],
    queryFn: () => Promise.resolve(initialData), 
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient
        initialQuery={initialQuery}
        initialPage={initialPage}
        initialData={initialData} 
      />
    </HydrationBoundary>
  );
}

