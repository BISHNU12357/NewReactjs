import './App.css'
import Card from './components/Card'
import myPhoto from './assets/myPhoto.jpg'

function App() {

  const obj = {
    name: "Bishnu",
    btnTxt: "know more",
    src: myPhoto,
  }

  return (
    <>
      <Card data={ obj } />
    </>
  )
}

export default App
