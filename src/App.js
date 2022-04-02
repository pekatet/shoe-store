import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AboutPage from './Components/AboutPage'
import ErrorPage from './Components/ErrorPage'
import banner from './assets/banner.jpg'
import ContactsPage from './Components/ContactsPage'
import Catalog from './Components/Catalog'
import MainPage from './Components/MainPage'

function App() {
  return (
    <Router>
      <div className="page">
        <Header/>
        <main className="container">
          <div className="row">
            <div className="col">
              <div className="banner">
                <img src={banner} className="img-fluid"
                     alt="К весне готовы!"/>
                <h2 className="banner-header">К весне готовы!</h2>
              </div>
              <Routes>
                <Route path="/catalog.html" element={<Catalog/>}/>
                <Route path="/about.html" element={<AboutPage/>}/>
                <Route path="/contacts.html" element={<ContactsPage/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
              </Routes>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

//          <Route path="/catalog:id" element={<ShopItem/>}/>
//           <Route path="/catalog" element={<Catalog/>}/>
//           <Route path="/contacts" element={<ContactsPage/>} />
//           <Route path="/about" element={<AboutPage/>} />
//           <Route path="/" element={<MainPage/>} />