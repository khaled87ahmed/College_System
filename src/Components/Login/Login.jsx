import React, { useState } from 'react'
import '../Login/Login.css'
import photo from '../../Assets/Images/imgLogin.jpg'
import { Link } from 'react-router-dom'
export default function Login() {

    const [moveLeft, setMoveLeft] = useState(false);



    return (
        <div className='login py-5'>
            <div className='container content py-5'>
                <div className="row p-5 ">



                    <div className="col-sm-12 col-lg-0 d-flex justify-content-center ">
                        <img src={photo} className='d-sm-block d-lg-none w-50' alt="" />
                    </div>




                    <div className={`col-12 d-lg-block col-lg-6 bg-white rounded-4 ${moveLeft ? 'd-none' : ''}`}>
                        <div className="container">
                            <h1 className='mt-5 fw-bold'>Login</h1>

                            <p className='lightColor pb-3'>Doesn't have an account yet? <Link onClick={() => setMoveLeft(true)} >Sign Up</Link></p>


                            <div className="inputContainer mb-4 d-flex">
                                <input id='email' type="text" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder' placeholder='Email Address' />
                                <span>
                                    <i class="fa-solid fa-at"></i>
                                </span>
                            </div>

                            <div className="inputContainer mb-4 d-flex">
                                <input id='password' type="password" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder' placeholder='Password' />
                                <span>
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                            </div>



                            <Link to='/' className='text-white text-decoration-none'><button className=' btn btn-primary mb-5 w-100 '>Login</button></Link>

                        </div>
                    </div>



                    <div className={`col-12 d-lg-block col-lg-6 rounded-4 ${moveLeft ? '' : 'd-none'}`}>
                        <div className=' w-100 h-100 rounded-4 position-relative'>

                            <div className={`d-none d-lg-block rounded-4 position-absolute  backgroundImg ${moveLeft ? 'moveLeft' : ''}`}>

                            </div>

                            <div className="container">
                                <h1 className='pt-5 fw-bold'>Let's create your account</h1>

                                <p className='lightColor pb-3'>Did you have an account ? <Link onClick={() => setMoveLeft(false)}>Login</Link></p>


                                <div className="inputContainer mb-4 d-flex">
                                    <input id='name' type="text" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder' placeholder='User Name' />
                                    <span>
                                        <i class="fa-solid fa-id-card"></i>
                                    </span>
                                </div>


                                <div className="inputContainer mb-4 d-flex">
                                    <input id='email' type="text" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder' placeholder='Email Address' />
                                    <span>
                                        <i class="fa-solid fa-at "></i>
                                    </span>
                                </div>


                                <div className="inputContainer mb-4 d-flex">
                                    <input id='password' type="password" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder' placeholder='Password' />
                                    <span>
                                        <i class="fa-solid fa-lock"></i>
                                    </span>
                                </div>


                                <div className="inputContainer mb-4 d-flex">
                                    <input id='repassword' type="password" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder' placeholder='rePassword' />
                                    <span>
                                        <i class="fa-solid fa-fingerprint"></i>
                                    </span>
                                </div>






                                <button onClick={() => setMoveLeft(false)} className=' btn btn-primary mb-5 w-100 '>Create an account</button>

                            </div>



                        </div>

                    </div>




                </div>
            </div>

        </div>
    )
}
