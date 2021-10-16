import './App.css'
import BlogPost from './components/BlogPost'
import Candystore from './components/Candystore'

function FunkyChicken(props) {
  return (
    <>
      <h2>Funky Freaking Chicken, diversity-boy!</h2>
      <ul>
        {props.rides.map((ride) => (
          <li>{ride}</li>
        ))}
      </ul>
    </>
  )
}
const rides = [
  'Space Mountain',
  'Carousel of Progess',
  'Rockin Rollercoaster',
  'Avatar Ride',
]

function App() {
  return (
    <div>
      <Candystore name="See's Candies" candy='chocolates' />
      <FunkyChicken rides={rides} />
      <h1>Thought Patterns Blog</h1>
      <BlogPost />
    </div>
  )
}

export default App
