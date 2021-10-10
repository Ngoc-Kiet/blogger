import React from 'react'

function Contact() {
    return (
        <div className="signs">
            <div className='sign'>
                <div className="sign_up">
                    Sign up for the newsletter
                </div>
                <div className="sign_text">
                    If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. 
                </div>
                <div className="sign_input">
                    <input className="sign_search-input" placeholder="Enter your email..." type="text" />
                    <button className="sign_up_button">
                        SIGN UP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact