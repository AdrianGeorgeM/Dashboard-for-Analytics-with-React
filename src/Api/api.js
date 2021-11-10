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

let fetchData = async (user = "12", endpoint = "/activity") => {
  let response = await fetch(`http://localhost:3000/user/${user}${endpoint}`);

  let data = await response.json();
  // console.log(data);
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
