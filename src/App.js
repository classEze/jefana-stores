import React, {useEffect} from 'react'
import { Header } from "./components/Header.js";
import { Products } from "./components/Products.js";
import { SearchBar } from "./components/SearchBar.js";
import  Footer  from "./components/Footer.js";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SingleProduct from './components/SingleProduct'
import About from "./components/About.js";
import Cart from "./components/Cart.js";
import { useDispatch} from 'react-redux'
import {setStore} from './Redux/Actions'



function App() {
  const dispatch = useDispatch()

  useEffect(
    () =>{
      fetch('https://manifest-salesapi.herokuapp.com/shops/comurule-venturesss-72594')
      .then(res=>res.json()).then(data=>dispatch(setStore(data))
        ).catch(err=>console.log(err))}, [] )

  return (
    <>
    <BrowserRouter>
    <Header/>
    <SearchBar />
    <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/product" component={SingleProduct} />
    <Route exact path="/about" component={About} />
    <Route exact path="/cart" component={Cart} />
    </Switch>
    <Footer />
    </BrowserRouter>
    </>
  );
}
export default App;
