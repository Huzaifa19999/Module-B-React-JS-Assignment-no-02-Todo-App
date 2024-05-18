import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [txt, setTxt] = useState<any>("abc")
  const [txtList, settxtList] = useState<any>([]); 

  const del = (i: any) => {
    txtList.splice(i, 1);
    settxtList([...txtList]);
  };

  const delAll = () => {
    settxtList([]);
  };

  const edit = (i: any) => {
   let newtxt = prompt("Enter new txt");
   txtList[i] = newtxt;
   settxtList([...txtList])
  };

  return (
    <div className='App container mt-5'>
      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={(e)=>{
          setTxt(e.target.value);
        }} />
        <button className="btn btn-primary" onClick={()=> {
          txtList.push(txt);
          console.log(txtList);
          settxtList([...txtList]);
        }}>Add</button>
      </div>

      <ul className="list-group">
        {txtList.map((e:any,i:any) => {
          return (
            <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
              {e}
              <div>
                <button className="btn btn-danger btn-sm me-2" onClick={()=> {del(i)}}>Delete</button>
                <button className="btn btn-warning btn-sm me-2" onClick={() => {edit(i)}} >Edit</button>
              </div>
            </li>
          )
        })}
      </ul>
      
      <button className="btn btn-danger mt-3" onClick={delAll}>Delete All</button>
    </div>
  );
}

export default App;
