import client from ".";

export function signIn(userdata) {
  return client.post("/auth/register", userdata);
}

export function login(userdata) {
  return client.post("/auth/login", userdata);
}
