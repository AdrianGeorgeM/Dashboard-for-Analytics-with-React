import PropTypes from "prop-types";

/**
 * @param {string} user // user id
 * @param {string} endpoint // endpoint
 * @returns {Promise} // error
 * @returns {Promise} // promise object
 * @description // fetch data from api
 * This function is used to fetch data from the server.
 * It takes in a user and an endpoint and returns the data.
 * It is used in the Api component.
 * */

//The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses between the browser and a server.
let fetchData = async (user, endpoint = "") => {
  // endpoint is optional and is used to fetch data from a specific endpoint
  let response = await fetch(`http://localhost:3000/user/${user}/${endpoint}`); // fetch data from the server using the user and endpoint provided by the user and returns the data in the form of a promise object which is then returned to the caller of the function fetchData in the Api component in the Api.js file

  let data = await response.json(); // convert the data from the form of a promise object to a json object
  //   await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

  // You can use await when calling any function that returns a Promise, including web API functions.

  return data;
};

fetchData.PropTypes = {
  user: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
};

fetchData.defaultProps = {
  endpoint: "",
};
export default fetchData;
