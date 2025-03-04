const BASE_URL = "https://randomuser.me/api/?results=500";

export const fetchData = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
}