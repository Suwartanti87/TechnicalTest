import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Giphy = () =>{
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    useEffect(()=>{
        const fetchData = async() =>{
            
            const results = await axios.get("https://api.giphy.com/v1/gifs/trending",{
            params:{
            api_key: "dni24spXCWpIuf7x4NQXuXpobQQe6C7p"
            }
        });

        console.log(results);
        setData(results.data.data);
        }
        fetchData();
    }, []);

    const renderGifs = () =>{
        
        return data.map(el =>{
            return (
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url}/>
                </div>
            )
        });
        const handleSearchChange = (event)=>{
            setSearch(event.target.value);
        };
        const handleSubmit = async event =>{
           
                const results = await axios.get("https://api.giphy.com/v1/gifs/search", {
                    params: {
                        api_key: "dni24spXCWpIuf7x4NQXuXpobQQe6C7p",
                        q: search }
        });
    };
    return (
        <div>
        <form className="form-inline justify-content-center m-2">
            <input onChange={handleSearchChange} type="text" placeholder="Search" className="form-control" />
            <button onClick={handleSubmit} type="submit" className="btn btn-primary mx-2">Search</button>
        </form>
    <div className="container gifs">{renderGifs()}</div>
    </div>);
    };
}
export default Giphy;