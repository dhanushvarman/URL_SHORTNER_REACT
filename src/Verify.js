import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { config } from './config'

function Verify() {

    const params = useParams();
    const navigate = useNavigate();

    async function verification(){
        try {
            await axios.put(`${config.api}/login/register/verify/${params.token}`);
            alert("Verified");
            navigate("/");
        } catch (error) {
            alert("Not Verified");
            console.log(error)
        }
    }

  return (
    <button className='btn btn-primary' onClick={verification}>Verify</button>
  )
}

export default Verify