import React from 'react'
import Banner from '../components/Header/Banner'
import Products from '../components/products/Products'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonial/Testimonials'
import Currency from '../components/Currency/Currency'
import '../components/Currency/curapp.css'

const HomeScreen = () => {
    return (
        <main className="w-full">
            <Banner />
            <Services />
            <Products />
            <div class="app">
            <Currency />
            </div>
            <Testimonials />
        </main>
    )
}

export default HomeScreen
