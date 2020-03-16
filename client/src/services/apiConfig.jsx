import Axios from "axios"

const JwtToken = localStorage.getItem("token") || null

let apiUrl

const apiUrls = {
<<<<<<< HEAD
    production: 'https://moviegoer12345.herokuapp.com/api',
    development: 'http://localhost:3000/api'
=======
  production: "https://sei-items-api.herokuapp.com/api",
  development: "http://localhost:3000/api"
>>>>>>> f2c450df2d74ad750c24808a34ed4d4314ff267e
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

console.log("tken====>>>>", JwtToken)

const api = Axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${JwtToken}`,
    "Access-Control-Allow-Origin": "*"
  }
})

export default api
