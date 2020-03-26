import React from 'react'
import Layout from '../components/shared/Layout'
import '../styles/explore.css'
import search from '../components/shared/constants'
import axios from "axios"


const Home = ({ user }) => (
  <Layout>
    <h2>Explore Your Favorite Movies</h2>
    <div className='movie-block'>
      {fetchInfo}      
    </div>

  </Layout>
)

const fetchInfo = async () => {
  try {
    const response = await axios.get(search)
  }
  catch (error) {
    console.log(error)
  }
}

fetchInfo()

export default Home