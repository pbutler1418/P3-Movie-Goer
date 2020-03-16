import api from "./apiConfig"

export const createComment = async comment => {
  try {
    const resp = await api.post(`/comments`, comment)
    return resp
  } catch (error) {
    throw error
  }
}


export const getCommentsByMovieId = async omdb_movie_id => {
  try {
    const resp = await api.get(`/comments`)
    const respFiltered = resp.data.comments.filter(comment => comment.omdb_movie_id === omdb_movie_id)
    return respFiltered
  } catch (error) {
    throw error
  }
}
