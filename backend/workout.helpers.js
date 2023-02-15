const apiKey = [
  'bdeff97547msh9e2fb2cf4487c88p1c2cdejsn329751128532',
  '29e98089a8msh3fd3ed66dc3490ap16249fjsn0f190f5481b5',
  '381a351d1fmsh49002bfcdd619a8p1fb7b6jsn2dfc9e093608',
];
const MAX_API_KEY = 3;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const workoutHelpers = {
  options: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey[getRandomInt(MAX_API_KEY)],
      'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com',
    },
  },
  async createDescription(name) {
    try {
      const descPromis = await fetch(
        `https://api.api-ninjas.com/v1/exercises?name=${name}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'b1lF+mYDYzeVz4LE8vl10A==SRghM2llzGl4XzzW',
          },
        }
      );
      const response = await descPromis.json();
      return response[0].instructions;
    } catch {
      return '';
    }
  },
  exerciseApi: 'https://exerciseapi3.p.rapidapi.com/search/',
};

exports.workoutHelpers = workoutHelpers;
