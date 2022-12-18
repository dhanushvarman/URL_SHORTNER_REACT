import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { config } from './config'
import axios from "axios"

function Createaccount() {

    const[loading,setloading] = useState(false);
    const[email,setemail] = useState(false);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            ConfirmPassword: ""
        },
        validate: (values) => {
            let error = {};

            if (!values.firstName) {
                error.firstName = "Please enter a name";
            }
            if (values.firstName && (values.firstName.length <= 2 || values.firstName.length > 15)) {
                error.firstName = "Name must be between 3 to 15 characters";
            }
            if (!values.lastName) {
                error.lastName = "Please enter a name";
            }
            if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.username)) {
                error.username = "Please enter a username";
            }
            if (values.ConfirmPassword !== values.password) {
                error.ConfirmPassword = "Passwords doesn't match"
            }

            return error
        },
        onSubmit: async (values) => {
            setloading(true);
            delete values.ConfirmPassword;
            await axios.post(`${config.api}/login/register/create`, values);
            setloading(false);
            formik.resetForm();
            setemail(true);
        }

    })

    return (
        <>
            <div className='container mt-5 text-center'>
                <div className='row'>
                    <h3>StackOverflow Welcomes you !!</h3>
                </div>
                <div className='row'>
                    <div class="container">
                        <div className='row'>
                            <div className='col-md-2 mt-4'>
                                <Link to={"/"} className='btn btn-dark'><i class="fa-solid fa-circle-arrow-left mr-2"></i>Back</Link>
                            </div>
                        </div>

                        <div class="row justify-content-center">

                            <div class="col-lg-6">

                                <div class="card o-hidden border-0 shadow-lg my-5">
                                    <div class="card-body p-0">


                                        <div class="p-5">
                                            <div class="text-center">
                                                <h5 class="h5 text-gray-900 mb-4">Create Your Account Here</h5>
                                            </div>
                                            <form onSubmit={formik.handleSubmit} class="user">
                                                <div class="form-group">
                                                    <input
                                                        name="firstName"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.firstName}
                                                        type="text"
                                                        className={`form-control form-control-user ${formik.errors.firstName ? 'error-box' : ''} 
                                                        ${formik.touched.firstName && !formik.errors.firstName ? 'success-box' : ''}`}
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Your firstName..." />
                                                    {
                                                        formik.errors.firstName ? <span style={{ color: "red" }}>{formik.errors.firstName}</span> : null
                                                    }
                                                </div>
                                                <div class="form-group">
                                                    <input
                                                        name="lastName"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.lastName}
                                                        type="text"
                                                        className={`form-control form-control-user ${formik.errors.lastName ? 'error-box' : ''} 
                                                        ${formik.touched.lastName && !formik.errors.lastName ? 'success-box' : ''}`}
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Your lastName..." />
                                                    {
                                                        formik.errors.lastName ? <span style={{ color: "red" }}>{formik.errors.lastName}</span> : null
                                                    }
                                                </div>
                                                <div class="form-group">
                                                    <input
                                                        name="username"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.username}
                                                        type="email"
                                                        className={`form-control form-control-user ${formik.errors.username ? 'error-box' : ''} 
                        ${formik.touched.username && !formik.errors.username ? 'success-box' : ''}`}
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." />
                                                    {
                                                        formik.errors.username ? <span style={{ color: "red" }}>{formik.errors.username}</span> : null
                                                    }
                                                </div>
                                                <div class="form-group">
                                                    <input
                                                        name="password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.password}
                                                        type="password" class="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <div class="form-group">
                                                    <input
                                                        name="ConfirmPassword"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.ConfirmPassword}
                                                        type="password"
                                                        className={`form-control form-control-user ${formik.errors.ConfirmPassword ? 'error-box' : ''} 
                        ${formik.touched.ConfirmPassword && !formik.errors.ConfirmPassword ? 'success-box' : ''}`}
                                                        id="exampleInputPassword" placeholder="Confirm Password" />
                                                    {
                                                        formik.errors.ConfirmPassword ? <span style={{ color: "red" }}>{formik.errors.ConfirmPassword}</span> : null
                                                    }
                                                </div>
                                                {
                                                    email ? <div className='card mb-3' style={{ backgroundColor: "lightgreen", color: "black" }}>
                                                    <div className='card-body text-center'>
                                                    <i class="fa-solid fa-circle-check mr-3" style={{color:"green"}}></i>Email sent Successfully for verification
                                                    </div>
                                                </div>
                                                    :
                                                    ""
                                                }
                                                {
                                                    loading ?<button class="btn btn-success btn-user btn-block" type="button" disabled>
                                                    <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                                    Creating...
                                                  </button>
                                                    :
                                                    <input type="submit" class="btn btn-success btn-user btn-block" value={"Create"} />
                                                }
                                                
                                                <hr />

                                            </form>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Createaccount
