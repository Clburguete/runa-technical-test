const defaultOptions = {
  method: 'GET',
  mode: 'no-cors',
  cache: 'no-cache',
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrer: 'no-referrer',
}

export const SERVICES = {
  getRandom: {
    options: {...defaultOptions},
    endpoint: 'https://pokeapi.co/api/v2/pokemon/1'
  }
}