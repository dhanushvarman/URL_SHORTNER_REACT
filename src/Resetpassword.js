import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { config } from './config';

function Resetpassword() {

    const params = useParams();
    const navigate = useNavigate();

    const [loading, setloading] = useState(false);

    const formik = useFormik({
        initialValues: {
            password: "",
            confirm: ""
        },
        validate: (values) => {
            let error = {};

            if (!values.password || !values.confirm) {
                error.confirm = "Please Enter Password";
            }

            if (values.password !== values.confirm) {
                error.confirm = "Password Mismatch";
            }

            return error
        },
        onSubmit: async (values) => {
            try {
                setloading(true);

                await axios.post(`${config.api}/login/register/reset-password/${params.id}/${params.token}`, values);
                setloading(false);
                alert("Password Updated");
                navigate("/")
            } catch (error) {
                console.log("Error in Reset Password")
            }
        }
    })
    return (
        <div className='container'>
            <div className='row mt' style={{ marginTop: "150px" }}>
                <div className='col-md-3'>

                </div>
                <div className='col-md-4'>
                    <div class="card" style={{width:"500px"}}>
                        <div class="card-body">
                            <h2 className='text-center' id='heading'>RESET PASSWORD</h2>
                            <form onSubmit={formik.handleSubmit} class="form">
                                <label className='mt-4'><b style={{color:"black"}}>Password :</b></label><br/>
                                <input type="password"
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter Password..." 
                                    className='form-control'/>
                                <label className='mt-4'><b style={{color:"black"}}>Confirm Password :</b></label><br/>
                                <input type="password"
                                    name='confirm'
                                    value={formik.values.confirm}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`form-control ${formik.errors.confirm ? 'error-box' : ''} 
                        ${formik.touched.confirm && !formik.errors.confirm ? 'success-box' : ''}`}
                                    placeholder="Confirm Password..." /><br/>
                                {
                                    formik.errors.confirm ? <div><span style={{ color: "red" }}>{formik.errors.confirm}</span><br/></div> : null
                                }
                                {
                                    loading ? <button type="submit" disabled>
                                        <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                        Reseting...
                                    </button>
                                        :
                                        <button type="submit" className='btn btn-success mt-4'>RESET</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Resetpassword