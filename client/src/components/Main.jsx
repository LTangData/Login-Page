import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Main = () => {
  const [data, setData] = useState('')

  const getData = async () => {
    try {
      const res = await axios.get('/')
      setData(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
        <h1>Main</h1>
        <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign up</Link></li>
            <li>{data}</li>
        </ul>
    </div>
  )
}

export default Main