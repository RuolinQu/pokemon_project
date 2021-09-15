export const fetchAllData = async (pageNumber) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=3&offset=${3 * pageNumber}`);
    const json = await response.json();
    console.log("json",json)
    return json
}

export const fetchData = async (keyword) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`);
    const json = await response.json();
    console.log("json",json)
    return json
}