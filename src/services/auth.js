const BASE_URL = `${process.env.REACT_APP_APT_BASE_URL}/api`

export async function login(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(auth)
  }
  const response = await fetch(`${BASE_URL}/auth/local/login`, options)
  return response.json()
}

export async function signup(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(auth)
  }
  const response = await fetch(`${BASE_URL}/auth/local/signup`, options)
  return response.json()
}
