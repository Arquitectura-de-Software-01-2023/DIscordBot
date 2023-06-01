const axios = require('axios');
const { globalHandler } = require('../handler.js');

exports.data = {
  name: 'hello',
  type: 1,
  description: 'replies with a random image from the internet.'
};

const getRandomImage = async () => {
  try {
    const response = await axios.get('https://picsum.photos/200/300'); // Obtener imagen aleatoria de Picsum
    return {
      "content": response.request.res.responseUrl // Devolver la URL de la imagen
    };
  } catch (error) {
    console.error('Error fetching random image:', error);
    return {
      "content": "Oops! An error occurred while fetching the image."
    };
  }
};

const action = async (body) => {
  // Puedes realizar otras operaciones con el objeto `body` si es necesario

  // Obtener una imagen aleatoria
  const imageResponse = await getRandomImage();

  return imageResponse;
};

exports.handler = (event) => {
  globalHandler(event, action);
};
