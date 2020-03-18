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
    return resp.data.movie
  } catch (error) {
    throw error
  }
}

export const createItem = async (id, item) => {
  try {
    const resp = await api.post(`/users/${id}/items`, item)
    console.log(resp.data)
    return resp
  } catch (error) {
    throw error
  }
}

export const updateItem = async (itemId, item) => {
  try {
    const resp = await api.put(`/items/${itemId}`, item)
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