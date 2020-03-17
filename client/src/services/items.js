import api from "./apiConfig"

export const getItems = async () => {
  try {
    const resp = await api.get("/items")
    return resp.data.movies
  } catch (error) {
    throw error
  }
}

export const getItemById = async id => {
  try {
    const resp = await api.get(`/items/${id}`)
    return resp.data.item
  } catch (error) {
    throw error
  }
}

export const createItem = async (id, item) => {
  try {
    console.log("id/items====>", id, item)
    const resp = await api.post(`/users/${id}/items`, item)
    // console.log(id, item)
    console.log(resp.data)
    return resp
  } catch (error) {
    throw error
  }
}

export const updateItem = async (userId, itemId, item) => {
  try {
    const resp = await api.put(`/items/${userId}/items/${itemId}`, item)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const deleteItem = async (userId, itemId) => {
  try {
    const resp = await api.delete(`/users/${userId}/items/${itemId}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const getMoviesUser = async id => {
  try {
    const resp = await api.post(`/users/${id}/items`)
    return resp.data
  } catch (error) {
    throw error
  }
}

//export get a movie from the api function

//export post a movie from the api function

// getmovie = async (search, currentUserId) => {
//   const movie = await axios.get(`imdb.com/api?title=${search}`)
//   const response = await api.post("/movies", movie.data, currentUserId)
// }
