
import { useState } from 'react'
import './App.css'
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

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

  //modal 

  const [modal, setModal] = useState(false)

  const [title, setTitle] = useState("")

  const [idx, setIdx] = useState(null)



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
  //function Complete
  
  function completeUser(id) {
    let arrComplete = data.map((elem) => {
      if (elem.id == id) {
        elem.complete = !elem.complete
      }
      return elem
    })

    setData(arrComplete)
    console.log(data);
  }
  // function editUser

  function editUser() {
    let arrEdit = data.map((elem) => {
      if (elem.id == idx) {
        elem.title= title
      }
      return elem
    })
    setData(arrEdit)
    setTitle("")
    setModal(false)
  }

  return (
    <>
      <div className="todo bg-blue-900 border text-center w-[400px] m-auto py-[50px] my-[50px] rounded-lg ">
        <div className="h1Top">
          <h1 className="font-light text-[24px] text-blue-100 ">Todo List</h1>
        </div>
        <br />
        <div className="inpBtn flex justify-center gap-5 py-[10px] ">
          <div className="inp">
            <input
              type="text"
              className=" outline-none py-[5px] w-[250px] bg-blue-300 border-blue-800 border-[2px]"
              value={text}
              placeholder="  what is task to day ?"
              onChange={(event) => setText(event.target.value)}
            />
          </div>

          <div className="btn">
            <button
              onClick={() => addUser()}
              className="border-[white] border-[1px] px-[10px] py-[5px] rounded-lg"
            >
              <AddIcon sx={{ color: "white" }} />
            </button>
          </div>
        </div>

        {data.map((elem) => {
          return (
            <div className="bg-blue-950 flex justify-around gap-5 py-[5px] my-[5px] border-b border-gray-500 ">
              <div className="usr py-[10px] ">
                <h1
                  className=""
                  style={{ color: elem.complete == true ? "red" : "white" }}
                >
                  {elem.title}
                </h1>
              </div>
              <div className="delEditComlete flex gap-5 ">
                <div className="delete ">
                  <button
                    onClick={() => deleteUser(elem.id)}
                    className="border-red-500 border-[1px] py-[8px] px-[5px] rounded-lg"
                  >
                    <ClearIcon color="error" />
                  </button>
                </div>

                <div className="comlete py-[5px]">
                  <input
                    type="checkbox"
                    onClick={() => completeUser(elem.id)}
                  />
                </div>
                <div className="edut border-[1px] border-green-500 px-[5px] py-[5px] rounded-lg">
                  <button
                    onClick={() => {
                      setModal(true);
                      setTitle(elem.title);
                      setIdx(elem.id);
                    }}
                  >
                    <EditIcon color="success" fontSize='small' />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {modal == true ? (
          <div className="modal">
            <div className="modal-content">
              <input
                type="text"
                value={title}
                onChange={(elem) => setTitle(elem.target.value)}
              />
              <button onClick={() => editUser()}>Submit</button>
              <span onClick={() => setModal(false)}>&times; </span>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App
