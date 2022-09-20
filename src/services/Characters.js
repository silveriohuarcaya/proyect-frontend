// const BASE_URL = 'https://rickandmortyapi.com/api'
const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api`

export const getCharacters = async () => {
  try {
    const res = await fetch(`${BASE_URL}/jobs`)
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error(error)
  }
  return console.log('Bien')
}

export const getIdCharacter = async (id) => {
  try {
    const dataItem = await fetch(`${BASE_URL}/jobs/${id}`)
    return dataItem
  } catch (error) {
    console.log(error)
  }
  return console.log('Muy Bien')
}
