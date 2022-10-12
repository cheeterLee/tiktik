import type { NextPage } from 'next'
import axios from 'axios'

// interface Iprops {
//   videos: 
// }

const Home: NextPage = () => {
  // console.log(videos)
  

  return (
    <h1 className='text-3xl font-bold underline'>
      Hello world!
    </h1>
  )
}

export const getSeverSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`)
  console.log(response)
  
  // return {
  //   props: {
  //     videos: data
  //   }
  // }
  return {
    props: {}
  }
}

export default Home
