import { Header } from "./components/Header.js";
import { Products } from "./components/Products.js";
import { SearchBar } from "./components/SearchBar.js";
import  Footer  from "./Footer.js";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SingleProduct from './components/SingleProduct'
import About from "./components/About.js";
import Cart from "./components/Cart.js";


function App() {
  return (
    <>

    <BrowserRouter>
    <Header/>
    <SearchBar />
    <Products/>
    <Switch>
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
