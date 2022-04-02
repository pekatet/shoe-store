import headerLogo from '../assets/header-logo.png'

function Header(){
  return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={headerLogo} alt="Bosa Noga"/>
      </a>
      <div className="collapse navbar-collapse" id="navbarMain">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Главная</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/catalog.html">Каталог</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/about.html">О магазине</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacts.html">Контакты</a>
          </li>
        </ul>
        {/*<div>*/}
          <div className="header-controls-pics">
            <div data-id="search-expander"
                 className="header-controls-pic header-controls-search"/>
            <div className="header-controls-pic header-controls-cart">
              <div className="header-controls-cart-full">1</div> {/*todo cart items counter ; cart link*/}
              <div className="header-controls-cart-menu"/>
            </div>
          </div>
          <form data-id="search-form"
                className="header-controls-search-form form-inline invisible"> {/*todo search visibility onclick*/}
            <input className="form-control" placeholder="Поиск"/>
          </form>
        {/*</div>*/}
      </div>
    </nav>

  )
}

//
//     <Navbar bg="light" variant="light">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>

export default Header;