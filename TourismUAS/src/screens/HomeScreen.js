import React, { Component } from 'react'
import Banner from '../components/Header/Banner'
import Products from '../components/products/Products'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonial/Testimonials'
import Currency from '../components/Currency/Currency'
import '../components/Currency/curapp.css'
import { connect } from "react-redux";
import { forecastRequest } from "../actions/forecast";
import WeatherDetail from "../components/Weather/WeatherDetail/WeatherDetail";
import "../components/Weather/WeatherCard/WeatherCard.css"
import Heading from '../components/Heading';

class HomeScreen extends Component {
    state = {
        activeCard: 0,
        search: "",
    };

    // use geolocation to choose the default city
    componentDidMount() {
        const { forecastRequest } = this.props;
        if (!navigator.geolocation) forecastRequest("Chernivtsi");
        else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    forecastRequest(
                        `${position.coords.latitude},${position.coords.longitude}`
                    );
                },
                () => {
                    forecastRequest("Chernivtsi");
                }
            );
        }
    }

    // change active card
    setActive = (index) => {
        this.setState((state) => ({ ...state, activeCard: index }));
    };
    render() {
        const { activeCard } = this.state;
        const { data, location, error } = this.props;
        // waiting data loading
        if (!data) {
            return <h3 className="info">Loading...</h3>;
        }
        return (
            <main className="w-full">
                <Banner />
                <Services />
                <div className='max-w-screen-xl mx-auto px-6 py-6 pb-24'>
                    <div className="forecast">
                        {/* heading  */}
                        <Heading title="Weather" />
                        <WeatherDetail
                            data={data[activeCard]}
                            city={location.name.toLocaleUpperCase()}
                        />
                        {/* <div className="forecast-cards">
                        {data.map((card, i) => {
                            return (
                                <WeatherCard
                                    key={i}
                                    index={i}
                                    date={card.date}
                                    condition={card.day.condition}
                                    avgtemp_c={card.day.avgtemp_c}
                                    isActive={activeCard === i}
                                    setActive={this.setActive}
                                />
                            );
                        })}
                    </div> */}
                    </div>
                </div>
                <Products />
                <div class="app">
                    <Currency />
                </div>
                <Testimonials />
            </main>
        )
    }
}
const mapDispatchToProps = { forecastRequest };
const mapStateToProps = (state) => ({
    error: state.forecast.error,
    location: state.forecast.data.location,
    data: state.forecast.data.forecastday,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);