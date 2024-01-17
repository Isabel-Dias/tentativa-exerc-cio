import './App.css';
import axios from 'axios';
import Swal from 'sweetalert2'


function App() {
  function getInfo() {
    const URL = import.meta.env.VITE_API_URL;
    axios
      .get(URL)
      .then((response) => {
        alert(Swal.fire({
          icon: 'success',
          title: 'Well...',
          text: `It kinda worked??? Don't ask me what went wrong!`
        }))
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: "Ooops!",
          text: "Now, something reeeeally went wrong..."
        })
      });
  }

  return (
    <>
      <div>
        <button onClick={getInfo}>
          Click here!
        </button>
      </div>
    </>
  )
}

export default App
