import axios from 'axios';

const GetData = async (url, setData) => {

  fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error(error));

};

export default GetData;