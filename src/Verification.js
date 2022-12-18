import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { config } from './config';

function Verification() {

    const params = useParams();
    const navigate = useNavigate();

    const [string, setString] = useState();
    const [loading, setloading] = useState(false);

    useEffect(() => {
        async function fetchData() {

            try {
                setloading(true)
                const data = await axios.get(`${config.api}/login/register/${params.id}`);
                setString(data.data.random)
                setloading(false)
            } catch (error) {
                setloading(false)
                console.log("Error in Getting User")
            }
        }
        fetchData();
    }, [])

    const formik = useFormik({
        initialValues: {
            code: ""
        },
        validate: (values) => {

            let error = {};

            if (!values.code) {
                error.code = "Please Enter a Code"
            }

            return error
        },
        onSubmit: (values) => {
            if (values.code == string) {
                alert("Verified");
                navigate(`/reset-password/${params.id}/${params.token}`)
            } else {
                alert("Code Incorrect")
            }
        }
    })

    return (
        <div id="verification">
            {
                loading ? <div class="d-flex justify-content-center" style={{ marginTop: "300px" }}>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                    :
                    <div className='container' style={{marginTop:"150px"}}>
                        <div className='row'>
                            <div className='col-lg-3'>

                            </div>
                            <div className='col-lg-5'>
                                <div class="card home-card">
                                    <div class="card-body">
                                        <h3 className='text-center' style={{color:"black"}}>Verification</h3>
                                        <form onSubmit={formik.handleSubmit}>
                                            <div class="textbox mt-4">
                                                <input type="text"
                                                    name='code'
                                                    value={formik.values.code}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={`form-control ${formik.errors.code ? 'error-box' : ''} 
                                                    ${formik.touched.code && !formik.errors.code ? 'success-box' : ''}`}
                                                    placeholder="Enter the Verification Code" />

                                            </div>
                                            {
                                                formik.errors.code ? <div style={{ color: "red" }}>{formik.errors.code}</div> : null
                                            }
                                            <input type="submit" className='mt-4 btn btn-primary' value={"VERIFY"} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Verification