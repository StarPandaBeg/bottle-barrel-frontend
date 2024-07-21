import getQueryClient from "@/components/util/query-client";
import { KEY, all } from "@/service/category";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import ActionBar from "./action-bar/action-bar";
import CategoryBar from "./categories/category-bar";
import PageBottomNavigation from "./page-bottom-navigation";

export default async function PageHeader() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [KEY],
    queryFn: all,
  });

  return (
    <header className="pb-2">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ActionBar />
        <CategoryBar className="mt-2 hidden xs:block" />
        <PageBottomNavigation className="xs:hidden" />
      </HydrationBoundary>
    </header>
  );
}
