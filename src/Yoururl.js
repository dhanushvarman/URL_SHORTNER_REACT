import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from './config'

function Yoururl() {

    const id = window.sessionStorage.getItem("userId");

    const [url, setUrl] = useState([]);
    const [loading, setloading] = useState(false);
    const [deleteLoading, setdeleteLoading] = useState(false);
    const [message, setMessage] = useState();
    const [length,setlength]= useState();

    useEffect(() => {
        async function fetchData() {

            try {
                setloading(true);
                const data = await axios.get(`${config.api}/login/url/your-url/${id}`);
                setloading(false);
                setUrl(data.data);
                setlength(url.length);
            } catch (error) {
                console.log(error);
                setloading(false);
                setMessage(error.response.data.message);
            }
        }
        fetchData()
    }, []);

    useEffect(()=>{
        
        console.log(length)
        if(length === 0){
            setMessage("No")
        }else{
            setMessage();
        }
    },[])
   

    async function deleteData(urlId) {

        try {
            if (window.confirm("Are you Sure !")) {
                setdeleteLoading(true);
                await axios.delete(`${config.api}/login/url/delete/${urlId}`);
                setdeleteLoading(false);
                window.location.reload();
            }

        } catch (error) {
            setdeleteLoading(false);
            console.log(error);
        }
    }

    
    return (
        <div className='p-3'>
            {
                loading ? <div class="d-flex justify-content-center" style={{ marginTop: "250px" }}>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                    :
                    <div>
                        {
                            message ? <div className='card mb-3' style={{ backgroundColor: "lightgrey", color: "black" }}>
                                <div className='card-body text-center'>
                                    <i class="fa-solid fa-circle-xmark mr-3" style={{ color: "red" }}></i>{message}
                                </div>
                            </div>
                                : ""

                        }
                        {
                            url.map((item, index) => {
                                return <div class="card mb-4">
                                    <h5 class="card-header" style={{ color: "blue" }}>Featured <button className='btn btn-warning btn-sm ' style={{ marginLeft: "1000px" }}><i class="fa-solid fa-eye mr-2"></i>Views : {item.views}</button></h5>
                                    <div class="card-body">
                                        <p class="card-title" style={{ color: "black" }}>Id : {index + 1}</p>
                                        <p class="card-title" style={{ color: "black" }}>LONG URL :</p><a href={`${item.longUrl}`} target="_blank">{item.longUrl}</a>
                                        <p class="card-text mt-3" style={{ color: "black" }}>SHORTEN URL :</p><a href={`${config.api}/login/url/${item.shortenUrl}`} target="_blank">{config.api}/login/url/{item.shortenUrl}</a>
                                        {
                                            deleteLoading ? <p className='mt-4'><button class="btn btn-danger btn-sm" type="button" disabled>
                                                <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                                Deleting...
                                            </button></p>
                                                :
                                                <p className='mt-4'><button onClick={() => { deleteData(item._id) }} className='btn btn-danger btn-sm'><i class="fa-solid fa-trash mr-2"></i>DELETE</button></p>
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default Yoururl