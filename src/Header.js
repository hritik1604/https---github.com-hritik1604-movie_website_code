import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllMovies } from './apis/apiList';
import { AppConstants } from './constant/constant';

function Header() {
  const dispatch = useDispatch()
  let searchedText = "";
  function getMovieBySearchText() {
    if(searchedText.length > 2) {
      dispatch(getAllMovies(1,AppConstants.ROUTE_PATH.HOME,searchedText))
    } else if(!searchedText.length) {
      dispatch(getAllMovies(1,AppConstants.ROUTE_PATH.HOME))
    }
  }

  function getSearchedText(event) {
    searchedText = event.target.value
  }
  
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="ms-5 text-light" as={Link} state={{id:AppConstants.ROUTE_PATH.HOME}} to={`/${AppConstants.ROUTE_PATH.HOME}`}>Movie DB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="me-5">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="text-light" as={Link} state={{id:AppConstants.ROUTE_PATH.POPULAR}} to={`/${AppConstants.ROUTE_PATH.POPULAR}`}> Popular</Nav.Link>
            <Nav.Link className="text-light" as={Link} state={{id:AppConstants.ROUTE_PATH.TOP_RATED}} to={`/${AppConstants.ROUTE_PATH.TOP_RATED}`}>Top Rated</Nav.Link>
            <Nav.Link className="text-light" as={Link} state={{id:AppConstants.ROUTE_PATH.UPCOMING}} to={`/${AppConstants.ROUTE_PATH.UPCOMING}`}>Upcoming</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Movie Name"
              className="me-2"
              aria-label="Search"
              onChange={getSearchedText}
            />
            <Button variant="outline-light" onClick={getMovieBySearchText}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;