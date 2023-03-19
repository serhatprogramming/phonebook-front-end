import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const getAllPersons = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const addNewPerson = (person) => {
  return axios.post(baseUrl, person).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const updatePerson = (id, person) => {
  return axios
    .put(`${baseUrl}/${id}`, person)
    .then((response) => response.data);
};

export default { getAllPersons, addNewPerson, deletePerson, updatePerson };
