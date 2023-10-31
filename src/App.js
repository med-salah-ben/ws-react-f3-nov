// import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container, Navbar, Card, Button } from "react-bootstrap";
import "./App.css";

// import Button from 'react-bootstrap/Button';

// function TypesExample() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }

function App() {
  return (
    <>
      <header>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>One Piece</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Contact US</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <img
          className="myImg"
          src="https://images5.alphacoders.com/132/1329624.png"
          alt="One Piece"
        />
        <div className="one_piece_cards">
          <Card className="one_piece_card" style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/61x-7TqfATL._AC_UF1000,1000_QL80_.jpg  "
            />
            <Card.Body>
              <Card.Title>Wanted </Card.Title>
              <Card.Text className="description">
                Well, it took more than 5 years, but it finally happened in
                Luffy's final battle with Kaidou in the Wano Country Arc. So,
                Luffy's Gear 5 is the latest gear technique in his arsenal.
              </Card.Text>
              <Button variant="primary">more details</Button>
            </Card.Body>
          </Card>
          <Card className="one_piece_card" style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://posterwa.com/cdn/shop/files/WANTED2.jpg?v=1686079734"
            />
            <Card.Body>
              <Card.Title>Wanted</Card.Title>
              <Card.Text className="description">
                Roronoa Zoro, also known as "Pirate Hunter" Zoro, is a fictional
                character created by Japanese manga artist Eiichiro Oda who
                appears in the manga series and media franchise One Piece.
              </Card.Text>
              <Button variant="primary">more details</Button>
            </Card.Body>
          </Card>
          <Card className="one_piece_card" style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/cd/30/8a/cd308aac10546747677561c5c1d73479.png"
            />
            <Card.Body>
              <Card.Title>Wanted</Card.Title>
              <Card.Text className="description">
                Shanks Red-Haired Shanks is a legendary and powerful pirate in
                the Grand Line, being the captain of the Red Haired Pirate Crew
                and one of the Four Emperors in the second half of the grand
                line.
              </Card.Text>
              <Button variant="primary">more details</Button>
            </Card.Body>
          </Card>
        </div>
      </main>
      <footer>
        <Card>
          <Card.Body style={{textAlign:"center"}}>copyright © 2023 all rights reserved</Card.Body>
        </Card>
      </footer>
    </>
  );
}

export default App;
