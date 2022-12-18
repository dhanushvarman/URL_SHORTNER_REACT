import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { config } from './config';

function Shortenurl() {

    const [loading, setloading] = useState(false);
    const [url, setUrl] = useState();

    const formik = useFormik({
        initialValues: {
            longUrl: ""
        },
        validate: (values) => {
            let error = {};

            if (!values.longUrl) {
                error.longUrl = "Please Enter the URL";
            }

            return error
        },
        onSubmit: async (values) => {

            try {
                setloading(true);
                const id = window.sessionStorage.getItem("userId");
                const shortenUrl = await axios.post(`${config.api}/login/url/create/${id}`, values);
                setloading(false);
                setUrl((shortenUrl.data).trim());
            } catch (error) {
                setloading(false);
                console.log(error);
            }
        }
    })

    return (
        <div className='container' >
            <div className='row text-center p-4'>
                <div className='col-lg-12'>
                    <h1 className='shorten-heading' style={{ fontSize: "30px" }}>Shorten Your URL Here !!!</h1>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row mt-3'>
                            <label className='shorten'>ENTER YOUR URL HERE :</label>
                            <div className='col-lg-10'>
                                <input
                                    type={"text"}
                                    name="longUrl"
                                    value={formik.values.longUrl}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`form-control ${formik.errors.longUrl ? 'error-box' : ''} 
                                    ${formik.touched.longUrl && !formik.errors.longUrl ? 'success-box' : ''}`}
                                    placeholder='Shorten Your Link'
                                />
                                {
                                    formik.errors.longUrl ? <span style={{ color: "red" }}>{formik.errors.longUrl}</span> : null
                                }
                            </div>
                            <div className='col-lg-2'>
                                {
                                    loading ?
                                        <button class="btn btn-success btn-user btn-block" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                            Creating...
                                        </button>
                                        :
                                        <input type={"submit"} value="Shorten Url" className='btn btn-success' />
                                }
                            </div>
                        </div>
                        {
                            !url ? ""
                                :
                                <div className='col-lg-10 mt-4'>
                                    <div className='card mb-3' style={{ backgroundColor: "lightgrey", color: "black" }}>
                                    <div className='card-body'>
                                        <i class="fa-solid fa-earth-americas mr-3" style={{color:"green"}}></i>
                                        SHORTEN URL : 
                                        <a href={`${config.api}/login/url/${url}`} target="_blank" style={{color:"blue"}}>{config.api}/login/url/{url}</a>
                                    </div>
                                </div>
                                </div>
                        }
                        <div className='text-center mt-3 shorten' style={{ fontWeight: "normal" }}>
                            <div>ShortURL.at is a free tool to shorten a URL or reduce a link</div>
                            <div>Use our URL Shortener to create a shortened link making it easy to remember</div>
                        </div>

                    </form>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-12'>
                    <h5 className='shorten-heading'>Simple and fast URL shortener!</h5>
                    <p className='shorten-p'>
                        ShortURL allows to reduce long links from
                        <span> </span>
                        <a className='links' href='https://www.instagram.com/' target={"_blank"}>Instagram</a>
                        ,<span> </span>
                        <a className='links' href='https://www.facebook.com/' target={"_blank"}>Facebook</a>
                        ,<span> </span>
                        <a className='links' href='https://www.youtube.com/' target={"_blank"}>YouTube</a>
                        ,<span> </span>
                        <a className='links' href='https://twitter.com/' target={"_blank"}>Twitter</a>
                        <span> </span>
                        Linked In and top sites on the Internet, just paste the long URL and click the
                        Shorten URL button. On the next screen, copy the shortened URL and share it on websites,
                        chat and e-mail.
                    </p>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-12'>
                    <h5 className='shorten-heading'>Shorten, share and track</h5>
                    <p className='shorten-p'>
                        Your shortened URLs can be used in publications, documents, advertisements,
                        blogs, forums, instant messages, and other locations. Track statistics for
                        your business and projects by monitoring the number of hits from your URL
                        with the click counter, you do not have to register.
                    </p>
                </div>
            </div>
            <div className='row text-center mt-4'>
                <div className='col-lg-4 '>
                    <img className='shorten-icon' src='https://www.shorturl.at/img/icon-like.png' />
                    <h5 className='shorten-heading'>Easy</h5>
                    <p className='shorten-p'>ShortURL is easy and fast, enter the long link to get your shortened link</p>
                </div>
                <div className='col-lg-4'>
                    <img className='shorten-icon' src='https://www.shorturl.at/img/icon-url.png' />
                    <h5 className='shorten-heading'>Shortened</h5>
                    <p className='shorten-p'>Use any link, no matter what size, ShortURL always shortens</p>
                </div>
                <div className='col-lg-4'>
                    <img className='shorten-icon' src='https://www.shorturl.at/img/icon-secure.png' />
                    <h5 className='shorten-heading'>Secure</h5>
                    <p className='shorten-p'>It is fast and secure, our service have HTTPS protocol and data encryption</p>
                </div>
            </div>
            <div className='row mt-5 text-center'>
                <div className='col-lg-4'>
                    <img className='shorten-icon' src='https://www.shorturl.at/img/icon-statistics.png' />
                    <h5 className='shorten-heading'>Statistics</h5>
                    <p className='shorten-p'>Check the amount of clicks that your shortened url received</p>
                </div>
                <div className='col-lg-4'>
                    <img className='shorten-icon' src='https://www.shorturl.at/img/icon-unique.png' />
                    <h5 className='shorten-heading'>Reliable</h5>
                    <p className='shorten-p'>All links that try to disseminate spam, viruses and malware are deleted</p>
                </div>
                <div className='col-lg-4'>
                    <img className='shorten-icon' src='https://www.shorturl.at/img/icon-responsive.png' />
                    <h5 className='shorten-heading'>Devices</h5>
                    <p className='shorten-p'>Compatible with smartphones, tablets and desktop</p>
                </div>
            </div>
            <div style={{ height: "100px" }}></div>
        </div>
    )
}

export default Shortenurl