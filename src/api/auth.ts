import client, { skipAuthHeader, skipTokenHeader } from "@/lib/axios";
import { SignInData } from "@/lib/forms/sign-in";
import { type User } from "./user";

const ENDPOINT = "/auth";

export interface AuthCredentials extends SignInData {}

export interface AuthRefreshCredentials {
  refresh_token: AuthToken | string;
}

export interface AuthToken {
  token: string;
  expires: number;
}

export interface AuthResult {
  user_id: number;
  access_token: AuthToken;
  refresh_token: AuthToken;
}

export async function auth(credentials: AuthCredentials) {
  const headers = { [skipAuthHeader]: true };
  const { data } = await client.post(ENDPOINT, credentials, {
    headers,
  });
  return data as AuthResult;
}

export async function refresh(credentials: AuthRefreshCredentials) {
  const possibleToken = credentials.refresh_token;
  const token =
    typeof possibleToken === "string" ? possibleToken : possibleToken.token;

  const headers = {
    Authorization: `Bearer ${token}`,
    [skipAuthHeader]: true,
    [skipTokenHeader]: true,
  };
  const { data } = await client.post(`${ENDPOINT}/refresh`, {}, { headers });
  return data as AuthResult;
}

export async function me() {
  const { data } = await client.get(`${ENDPOINT}/me`);
  return data as User;
}
