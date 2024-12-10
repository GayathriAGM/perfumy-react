import Navbar from './components/Navbar';
import Search from './components/Search';
import Products from './components/Products';
import AboutUs from './components/About';
import ContactUs from './components/ContactUs';
function App(){
  return(
    <div>
  <Navbar></Navbar>
  <Search></Search>
  <Products></Products>
  <AboutUs></AboutUs>
  <ContactUs></ContactUs>
</div>
  )
}
export default App