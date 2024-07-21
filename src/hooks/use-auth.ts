import { AuthResult } from "@/api/auth";
import { authStorage } from "@/lib/storage";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [authResult, setAuthResult] = useState<AuthResult>();

  useEffect(() => {
    const authData = authStorage().get();
    setAuthResult(authData);
  }, []);
  return authResult;
}
