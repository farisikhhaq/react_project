import React, { useEffect, useState } from 'react'
import CurrencyForm from './CurrencyForm'
import CurrencyList from './CurrencyList'
import Axios from 'axios';
import './currency.css';
import { BsCurrencyExchange } from 'react-icons/bs';
import Heading from '../Heading';

export default function Currency() {

    // my access key for the web api  http://api.currencylayer.com/list?access_key=
    const access_key = '3f721942cddb3b199905f3aea4bb647d';
    const [currencyExchange, setCurrencyExchange] = useState([]);
    const [frCurrency, setFrCurrency] = useState('USD');
    const [frAmount, setFrAmount] = useState('');
    const [secCurrency, setSecCurrency] = useState('IDR');
    const [secAmount, setSecAmount] = useState('');

    const [currenciesList, setCurrenciesList] = useState([]);


    useEffect(() => {
        Axios
            .get(`http://api.currencylayer.com/list?access_key=${access_key}`)
            .then(res => {
                setCurrenciesList([res.data]);
            }).catch(error => console.log('error 3'))

    }, [])
    // exchange
    useEffect(() => {
        Axios
            .get(`http://api.currencylayer.com/live?access_key=${access_key}`)
            .then(res => {
                setCurrencyExchange(res.data.quotes);
            }).catch(error => console.log('error2'))

    }, []);
    useEffect(() => {
        if (!!currencyExchange) {
            function init() {
                onChangeFrAmount(1);
            }
            init();
        }
    }, [currencyExchange]);

    // for formating number for just 4 digits
    function format(number) {
        return number.toFixed(4);
    }
    // i used USD before it because the APi response just for usd currency
    function onChangeFrAmount(frAmount) {
        setSecAmount(format(frAmount * currencyExchange['USD' + secCurrency] / currencyExchange['USD' + frCurrency]));
        setFrAmount(frAmount);
    }

    function onChangeFrCurrency(frCurrency) {
        setSecAmount(format(frAmount * currencyExchange['USD' + secCurrency] / currencyExchange['USD' + frCurrency]));
        setFrCurrency(frCurrency);

    }

    function onChangeSecAmount(secAmount) {
        setFrAmount(format(secAmount * currencyExchange['USD' + frCurrency] / currencyExchange['USD' + secCurrency]));
        setSecAmount(secAmount);

    }

    function onChangeSecCurrency(secCurrency) {
        setFrAmount(format(secAmount * currencyExchange['USD' + frCurrency] / currencyExchange['USD' + secCurrency]));
        setSecCurrency(secCurrency);
    }


    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            {/* heading  */}
            <Heading title="Currency Check Exchange" />
            <div className='currency-app'>

                <CurrencyForm
                    onAmountChange={onChangeFrAmount}
                    onCurrencyChange={onChangeFrCurrency}
                    amount={frAmount}
                    currency={frCurrency}
                    currencies={Object.keys(currencyExchange)}
                />
                <CurrencyForm
                    onAmountChange={onChangeSecAmount}
                    onCurrencyChange={onChangeSecCurrency}
                    currencies={Object.keys(currencyExchange)}
                    amount={secAmount}
                    currency={secCurrency}
                />

                <CurrencyList />
            </div>
        </section>

    )
}

