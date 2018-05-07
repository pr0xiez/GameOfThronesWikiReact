import fetch from 'isomorphic-fetch';

class Fetch {
  static fetchy = async (params) => {
    const response = await fetch(
      `https://www.anapioficeandfire.com/api/${params}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    return await response.json();
  }
}

export default Fetch;