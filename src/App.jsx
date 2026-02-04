import { use, useState } from "react";
const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kamm krle bhai", iscompleted: false },
]);


const [title, settitle] = useState("")
const SubmitHandler =(e) => {
  e.preventDefault();
  

  const newtodo ={
    id: nanoid(), 
    title,
    isComplrted: false,
    
  };
  console.log(newtodo);
};

  return (
    <div>
      <h1>create Tasks</h1>
      <form onSubmit = {SubmitHandler}> 
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br/>
        <br/>
       <button>Create Todo</button> 
       </form> 
    </div> 
  );
};     

export default App;
