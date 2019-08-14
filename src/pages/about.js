import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
               <h1>About me</h1>
            <h2>I am an aspiring full stack web developer</h2>
            <p><Link to="/contact">Want to work with me? Reach out</Link></p>
        </Layout>
    )
}

export default AboutPage;