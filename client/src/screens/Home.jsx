import React from 'react'
import Layout from '../components/shared/Layout'
// import { Link } from 'react-router-dom'
// import Header from './Header'
import '../styles/explore.css'
import search from '../components/shared/constants'
import axios from "axios"


const Home = ({ user }) => (
  <Layout>
    <h1>Explore Your Favorite Movies</h1>
    <div className='movie-block'>
      {fetchInfo}      
    </div>

  </Layout>
)

const fetchInfo = async () => {
  try {
    const response = await axios.get(search)
    console.log(response.data.results)

  }
  catch (error) {
    console.log(error)
  }
}

fetchInfo()

export default Home