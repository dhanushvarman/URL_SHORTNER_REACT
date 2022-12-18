import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7 home-heading'>
                    <p><div>Welcome to URL Shortner !</div><br />
                        <div>Convert your Long Url into Short Url</div>
                        <div>No Cost !! Unlimited Usage</div><br />
                        <Link to={"/portal/shorten-url"} className='btn btn-primary btn-lg'><i class="fa-solid fa-link mr-2"></i>SHORTEN URL HERE</Link>
                    </p>
                </div>
                <div className='col-lg-5'>
                    <img className='home-icon' src='https://docrdsfx76ssb.cloudfront.net/static/1670962192/pages/wp-content/uploads/2022/08/home-hero-mobile-v2.png' />
                </div>
            </div >
            <div className='row text-center'>
                <div className='col-lg-12 home-info'>
                    <div>What is url Shortner ?</div>
                </div>
            </div>
            <div className='row'>
                <p className='home-info1'>
                    Url shortner is a all-in-one Link Management Platform for all your links and needs.
                    It is an advanced URL Shortener with extensive Link Analytics.
                    Cuttly offers solutions that will allow you to manage your links,
                    thanks to which you can develop your business while having your links
                    under control. Cuttly is also a platform for creating your own Link in bio
                    microsites.
                </p>
            </div>
            <div className='row mt-4 mb-5'>
                <div className='col-lg-2'>

                </div>
                <div className='col-lg-4'>
                    <div class="card text-center home-card">
                        <div class="card-body">
                            <div className='home-card-image'>
                                <img className='home-image' src='https://cutt.ly/img/m_ico_m_c_1.svg' />
                            </div>
                            <h3 className='home-card-heading'>URL Shortener</h3>
                            <p className='home-card-para'>URL Shortner is a URL Shortener and Link Management
                                Platform with a lot of features that will help
                                you handle all your links in an intuitive way
                                and reveal the potential of your links.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                <div class="card text-center home-card">
                        <div class="card-body">
                            <div className='home-card-image'>
                                <img className='home-image' src='https://cutt.ly/img/m_ico_m_c_2.svg' />
                            </div>
                            <h3 className='home-card-heading'>Link analytics</h3>
                            <p className='home-card-para'>URL Shortner is an advanced Link Analytics platform that tracks
                             clicks on short links and measures the effectiveness of clicks. Extensive 
                             statistics of clicks on short links.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-lg-6 mt-3'>
                    <img src='https://docrdsfx76ssb.cloudfront.net/static/1670962192/pages/wp-content/uploads/2022/06/globe.png'/>
                </div>
                <div className='col-lg-6 mt-3'>
                    <table className='home-table'>
                        <tbody className='table-body'>
                            <tr style={{height:"24px"}} className="table-row">
                                <td style={{width:"50%",height:"24px"}}>
                                    <h3 className='table-heading'>500K</h3>
                                </td>
                                <td style={{width:"50%",height:"24px"}} className='table-td'>global paying customers</td>
                            </tr>
                            <tr style={{height:"24px"}}>
                                <td style={{width:"50%",height:"24px"}}>
                                    <h3 className='table-heading'>5.7M</h3>
                                </td>
                                <td style={{width:"50%",height:"24px"}} className='table-td'>monthly active users</td>
                            </tr>
                            <tr style={{height:"24px"}}>
                                <td style={{width:"50%",height:"24px"}}>
                                    <h3 className='table-heading'>256M</h3>
                                </td>
                                <td style={{width:"50%",height:"24px"}} className='table-td'>links & QR codes created monthly</td>
                            </tr>
                            <tr style={{height:"24px"}}>
                                <td style={{width:"50%",height:"24px"}}>
                                    <h3 className='table-heading'>10B</h3>
                                </td>
                                <td style={{width:"50%",height:"24px"}} className='table-td'>connections (clicks & scans) monthly</td>
                            </tr>
                            <tr style={{height:"24px"}}>
                                <td style={{width:"50%",height:"24px"}}>
                                    <h3 className='table-heading'>800+</h3>
                                </td>
                                <td style={{width:"50%",height:"24px"}} className='table-td'>app integrations</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h3 className='heading'>Loved by big and small brands everywhere</h3>
                </div>
            </div>
            <div className='row mt-4 mb-5 text-center'>
                <div className='col-lg-1'>

                </div>
                <div className='col-lg-2'>
                    <img src='https://docrdsfx76ssb.cloudfront.net/static/1670962192/pages/wp-content/uploads/2022/06/novasol.svg' />
                </div>
                <div className='col-lg-2'>
                    <img src='https://docrdsfx76ssb.cloudfront.net/static/1670962192/pages/wp-content/uploads/2022/06/big-fish.svg' />
                </div>
                <div className='col-lg-2'>
                    <img src='https://docrdsfx76ssb.cloudfront.net/static/1670962192/pages/wp-content/uploads/2022/06/marriott.svg' />
                </div>
                <div className='col-lg-2'>
                    <img src='https://docrdsfx76ssb.cloudfront.net/static/1670962192/pages/wp-content/uploads/2022/06/new-york-times.svg' />
                </div>
                <div className='col-lg-2'>
                    <img src='https://docrdsfx76ssb.cloudfront.net/static/1670962192/pages/wp-content/uploads/2022/06/electronic-arts.svg' />
                </div>
            </div>
        </div >
    )
}

export default Home