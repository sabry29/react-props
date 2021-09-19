
import './App.css';
import  Profile from './profile/Profile'

function App() {
  const users = [
    {
      name :"Nadim",
      age :"20",
      email :"@gmail.com"
    },
    {
      name : "sabry",
      age :"29",
      email :"@gmail.fr"
    }
  ]
  const handelName = (name) => {
    alert(`hello ${name} `)

  }
  return (
    <div className="App">
      {users.map(ele=>{
        return(<Profile props={ele} func={handelName} />)

        

      })}
     
    </div>
  );
}

export default App;
