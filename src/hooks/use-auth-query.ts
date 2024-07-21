import { authStorage } from "@/lib/storage";
import {
  DefaultError,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

function useAuthQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError>;

function useAuthQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient
): UseQueryResult<TData, TError>;

function useAuthQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient
): UseQueryResult<TData, TError>;

function useAuthQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: any,
  queryClient?: QueryClient
): UseQueryResult<TData, TError> | never {
  // used to bypass hydration errors
  // @see https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const hasAuthData = authStorage().has();
  if (mounted && !hasAuthData) redirect("/sign-in");

  return useQuery({ ...options, enabled: mounted }, queryClient);
}

export default useAuthQuery;
