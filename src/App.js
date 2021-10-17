import BlogPost from './components/BlogPost'
import React, { useState } from 'react'

function SecretComponent() {
  const [auth, setAuth] = useState('authorized')
  return <h1>This is the secret component for only secure users.</h1>
}

function RegularComponent() {
  return <h1>This is for all users. Regularo.</h1>
}

function Rides(props) {
  console.log(props)
  return (
    <div>
      <h4>These are the best Disney Rides</h4>
      <ul>
        {props.rides.map((ride) => (
          <li key={ride.id}>{ride.title}</li>
        ))}
      </ul>
    </div>
  )
}
const rides = [
  'Space Mountain',
  'Carousel of Progess',
  'Rockin Rollercoaster',
  'Avatar Ride',
]

const ridesObjects = rides.map((ride, i) => ({ id: i, title: ride }))
console.log(ridesObjects)
function App() {
  const [feeling, setFeeling] = useState('no bueno')
  return (
    <>
      <button onClick={() => setFeeling('bueno')}>Bueno button</button>
      <button onClick={() => setFeeling('no bueno')}>NO bueno button</button>
      <button onClick={() => setFeeling('fabulouso')}>Fabulouso button</button>
      <h1> Current mood is {feeling} .</h1>
      <h1>Disney Blog</h1>
      <Rides rides={ridesObjects} />
      {/* rides is the key in an array of rides objects, so when you iterate over it
        above, you need to call props (which is the array, then the key, then keep
        going) */}

      <BlogPost />
    </>
  )
}

export default App
