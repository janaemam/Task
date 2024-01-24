import { useEffect, useState } from "react";

import'../style/home.css'

const Home = () => {

    const [data,setData]= useState([]);
    const[username,setUsername]= useState('');
  
    const [results, setResults]= useState([]);

    useEffect(()=>{
        getData();
        setUsername(localStorage.getItem('username'));
    },[]);


    const getData= async () => {
        const response = await fetch("/numeros");
        const data = await response.json();

        if(response.status ===200){
           setData(data.numeros);
        }
        else{
            console.log("Data not found");
        }
        console.log(data);
    }
    // const getResult = async (id,numero) => {
    //     const response= await fetch("/calc",{method:'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     body: JSON.stringify({"id":id,"numero":numero})
    // }
    //     );
    //     return response.json().result;
    // }

    const calculateResult = async (e, numero,index, id) => {
        if(e.target.value === ''){
            setResults((prevResult)=>{
                const newResult = [...prevResult];
                newResult[index] = '';
                return newResult;
            })
            return;
        }
      
        const inputValue = e.target.value;
        if(isNaN(inputValue)){
        alert("Please enter a number");
        }

        let temp= ((inputValue/numero)*100);
        temp = temp.toFixed(2);
        // let temp = await getResult(id, numero)
        // console.log(temp);

        setResults((prevResult)=>{
            const newResult = [...prevResult];
            newResult[index] = temp;
            return newResult;
        })

       
    }
    const logout = async () => {
        const response = await fetch("/logout",{method:'POST'});
        const data = await response.json();

        if(response.status === 200){
            localStorage.removeItem('authenticated');
            localStorage.removeItem('username');
      
            window.location.href = '/';
        }
        else{
            console.log("Logout Failed");
        }
        console.log(data);
    }

    return(
    <div className="main">
        <header>
            <h3>Hello {username}!</h3>
        <h1>Home</h1>
        <button onClick={logout}>Log Out</button>
        </header>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Random Number</th>
                        <th>Input</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( (item, index)=>(
                        <tr key={item.id}>
                            <td>{item.numero}</td>
                            <td><input type="number" onChange={(e)=>calculateResult(e, item.numero, index, item.id)}></input></td>
                            <td>
                                <span>
                                {results[index] !== undefined && results[index] !== '' ? `${results[index]}%` : ''}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    </div>
    
    );
}
export default Home;