import React, {useState} from 'react';

  function Home (props) {
  const [pnr,setPnr] = useState([]);
  const [items, setItems] = useState([]);
  const api = '34d8c6bebb47f82323b744ead2096372';
  
    function submit() {
      console.warn(items)
      
      document.title = `You clicked ${pnr} times`;
      
      //API FETCH 
      fetch("https://indianrailapi.com/api/v2/StationCodeToName/apikey/"+api+"/StationCode/"+pnr+"/"
      )
      .then(res => res.json())
      .then(
        (result) => {
          //setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          //setIsLoaded(true);
          //setError(error);
        }
      )
    }
     return (
       <>
         <h1>SDAH</h1>
         <input type="text"
            placeholder="enter name"
            name="user" 
            onChange={event => setPnr(event.target.value)} />
            <button onClick={() => {submit() }} >Login</button>
            <p>{items.NameEn}</p>
       </>
       )
  }
  export default Home;