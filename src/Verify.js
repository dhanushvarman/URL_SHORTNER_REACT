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
    <div className='container' style={{marginTop:"150px"}}>
                        <div className='row'>
                            <div className='col-lg-4'>

                            </div>
                            <div className='col-lg-4'>
                                <div class="card home-card">
                                    <div class="card-body">
                                        <h3 className='text-center' style={{color:"black"}}>Verification</h3>
                                            <div class="textbox mt-4 text-center">
                                                <button className='btn btn-info' onClick={verification}>Verify</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}



export default Verify