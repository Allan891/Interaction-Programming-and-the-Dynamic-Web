import { PROXY_URL, PROXY_KEY, GROUP } from "./apiConfig.js";

export function searchDishes(searchParams) {
  const endpoint = "/recipes/complexSearch";  
  const query = new URLSearchParams(searchParams).toString(); // serialize key
  const url = PROXY_URL + endpoint + "?" + query;             //URL

  return fetch(url, {
    method: "GET",
    headers: {
      "X-DH2642-Key": PROXY_KEY,
      "X-DH2642-Group": GROUP,
    },
  }).then(gotResponseACB)
  .then(someACB);
}

function gotResponseACB(response) {
    if (!response.ok) {
        throw new Error("Network error: " + response.status);
    }
    return response.json();
}


function someACB(apiResultObject) {
    console.log("Search API returned:", apiResultObject);
    return apiResultObject.results;
}




export function getMenuDetails(ids_array) {
  const endpoint = "/recipes/informationBulk";  
  const paramsObject = { ids: ids_array};
  const queryString = new URLSearchParams(paramsObject).toString(); // serialize key
  const url = PROXY_URL + endpoint + "?" + queryString;             //URL

  return fetch(url, {
    method: "GET",
    headers: {
      "X-DH2642-Key": PROXY_KEY,
      "X-DH2642-Group": GROUP,
    },
  }).then(gotResponseACB);
}



export function getDishDetails(id) {
    function arrayToObjectACB(resultArray) {
        return resultArray[0];
    }
    return getMenuDetails([id]).then(arrayToObjectACB);
}