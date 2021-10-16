import './App.css'
import BlogPost from './components/BlogPost'

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
  return (
    <div>
      <h1>Disney Blog</h1>
      <Rides rides={ridesObjects} />
      {/* rides is the key in an array of rides objects, so when you iterate over it
      above, you need to call props (which is the array, then the key, then keep
      going) */}

      <BlogPost />
    </div>
  )
}

export default App
