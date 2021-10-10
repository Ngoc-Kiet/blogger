import React from 'react'
import { Header, Banner, Footer } from '../components/general'

import { WrapperList } from '../components/list'

function List() {
    return (
        <div className = "list-page">
            <Header />
            <div className = "main-banner">
                <div className="text-center mb-5">
                    <img src="/icc.png" alt=""/>
                </div>
                <Banner />
            </div>

            <div className = "second-wrapper mb-5">
                <hr width="40%" size="2px" align="center" color="black"/>
                <div className = "title-wrapper-list text-center my-5">
                    All articles
                </div>
                <WrapperList />
            </div>

            <Footer />
        </div>
    )
}

export default List