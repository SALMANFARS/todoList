
import { useState } from 'react'
import './App.css'

function App() {
  
   //data
  const [data, setData] = useState([
    {
      id: 1,
      title: "Hello",
      complete: false,
    },
    {
      id: 2,
      title: "GoodBye",
      complete: false,
    },
  ]);


  //text add
  const [text, setText] = useState("")



  // function add
  function addUser (){
    if (text.trim().length == 0) {
       return alert("Please enter a username");
    } else {
      let user = {
        id: Date.new,
        title: text,
        complete: false,
      };
      let arr = [...data, user];

      setData(arr);
      setText("");
    }
  }

  //function delete
  function deleteUser(id) {
    let arrDelete = data.filter((elem)=>{
      return elem.id != id 
    })
    setData(arrDelete )
  }

  return (
    <>
      <div className="border ">
        <h1 className="font-light text-[24px] ">Todo List</h1>
        <br />
        <input
          type="text"
          className="border outline-none w-[20%]"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <button onClick={() => addUser()} className="border-gray-500 border-[1px] px-[10px]">
          Add
        </button>
        

        {
          data.map((elem) => {
          return (
            <div className="flex justify-center gap-5 ">
              <div className="user py-[10px]">
                <h1>{elem.title}</h1>
              </div>
              <div className="delete ">
                <button onClick={()=>deleteUser(elem.id)} className="border-red-500 border-[1px] py-[10px] px-[10px]">Delete</button>
              </div>

              <div className="comlete">
                <input type="checkbox"  />
              </div>
            </div>
          );
          })
          
        }
      </div>
    </>
  );
}

export default App
