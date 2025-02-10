import client from ".";

export function signIn(userdata) {
    return client.post("/auth/register", userdata).catch(console.error);
}

export function login(userdata) {
    return client.post("/auth/login", userdata).catch(console.error);
}
