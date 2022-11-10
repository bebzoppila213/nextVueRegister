import axios from "axios";

export async function auth(login, password) {
    try {
        const data = await axios.post("http://localhost:3001/auth/login", {
            login: login,
            password: password,
        });
        return data.data;
    } catch {
        return null;
    }
}

export async function proofile(token) {
    try {
        const data = await axios.get("http://localhost:3001/profile", {
            headers: { Authorization: `Bearer ${token}` },
        });
        return data.data;
    } catch {
        return null;
    }
}

export async function update(token, field, value) {
    try {
        const data = await axios.post(
            "http://localhost:3001/update", { field: field, value: value }, { headers: { Authorization: `Bearer ${token}` } }
        );
        return data.data;
    } catch {
        return null;
    }
}


export  async  function register(login, password, name, adress, phone){
    try {
        const data = await axios.post("http://localhost:3001/create", {"login": login, "password": password, "phone": phone,"name": name,"adress": adress });
        return data.data;
    } catch {
        return null;
    }
}