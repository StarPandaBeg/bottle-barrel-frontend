import { ReactNode } from "react";

export interface LoadingWrapperProps {
  isLoading?: boolean;
  isError?: boolean;

  skeleton?: ReactNode;
  error?: ReactNode;
  children?: ReactNode;
}

export default function LoadingWrapper(props: LoadingWrapperProps) {
  if (props.isLoading) return props.skeleton;
  if (props.isError) return props.error;
  return props.children;
}
