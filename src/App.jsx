import { use, useState } from "react";
const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kamm krle bhai", iscompleted: false },
]);


const [title, settitle] = useState("")

const [completed,setcompleted] = useState(true);

const [gender, setgender] = useState("male");

const [city, setcity] = useState("mumbai");

  return (
    <div>
      <h1>create Tasks</h1>
      <form>
        <input
          onChange={(e) => setcompleted(e. target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
         <br />
         <br />
         <input
           checked={completed}
           onChange={(e) => setcompleted(e.target.checked)}
           type="checkbox"
        />
         completed
         <br /> <br />
          <input
        value="male"
        onChange={(e) =>setgender(e.target.value)}
        checked={gender =="male" && true}
        type="radio"
        />
        male

        <input
        value="female"
         onChange={(e) =>setgender(e.target.value)}
        checked={gender =="female" && true}
        type="radio"
        
        />
        female
        <br />
         <br />
         <select value={city} onChange={(e) => setcity(e.target.value)}>
             <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
               <option value="kolkata">Kolkata</option>
               <option value="patna">Patna</option>
              <option value="hyderabad">Hyderabad</option>
               <option value="jaipur">Jaipur</option>
        </select>       
 <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
