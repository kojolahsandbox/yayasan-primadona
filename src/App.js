import React from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Custom styles

// Card Component
const CardComponent = ({
  bgColor,
  title,
  description,
  link,
  image,
  altText,
}) => (
  <Col xs={12} sm={6} md={4} className="mb-4">
    <Card bg={bgColor} text="light" className="card-style">
      <Card.Body className="d-flex align-items-center">
        <div className="flex-grow-1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none"
          >
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="outline-light">Visit Website</Button>
          </a>
        </div>
        <img src={image} width="55px" alt={altText} />
      </Card.Body>
    </Card>
  </Col>
);

// Carousel Component
const CarouselComponent = () => (
  <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://sdit.algibrani.sch.id/wp-content/uploads/2021/10/Rimadona-SE.-MM-Pendiri-YPAB.jpg"
        alt="Rimadona, SE,. MM Pendiri Yayasan Primadona Anak Bangsa"
      />
    </Carousel.Item>
  </Carousel>
);

const App = () => {
  return (
    <div className="App">
      <Container className="text-light mt-5 pt-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <img
            src="https://sdit.algibrani.sch.id/wp-content/uploads/2021/10/logo-yayasan-primadona-anak-bangsa.png"
            width="20%"
            alt="Logo Yayasan"
          />
          <h1 className="text-shadow">Yayasan Primadona Anak Bangsa</h1>
          <p className="text-shadow">~ Cerdas Bersama Al-Qur'an ~</p>
        </div>

        {/* Cards Section */}
        <Row>
          <CardComponent
            bgColor="primary"
            title="TK IT AL-GIBRANI"
            description="Official Website"
            link="https://tk.algibrani.sch.id/"
            image="https://tk.algibrani.sch.id/wp-content/uploads/2021/10/fav-TK-IT-Al-Gibrani.png"
            altText="TK IT AL-GIBRANI"
          />
          <CardComponent
            bgColor="success"
            title="SD IT AL-GIBRANI"
            description="Official Website"
            link="https://sdit.algibrani.sch.id/"
            image="https://sdit.algibrani.sch.id/wp-content/uploads/2021/10/fav-sd-it-algibrani.png"
            altText="SD IT AL-GIBRANI"
          />
          <CardComponent
            bgColor="info"
            title="SMP IT AL-GIBRANI"
            description="Official Website"
            link="https://smpit.algibrani.sch.id/"
            image="https://algibrani.sch.id/assets/uploads/ppdb.png"
            altText="SMP IT AL-GIBRANI"
          />
          <CardComponent
            bgColor="dark"
            title="Blog Guru"
            description="SD IT AL-GIBRANI"
            link="https://sdit.algibrani.sch.id/blog"
            image="https://algibrani.sch.id/assets/uploads/penilaian.png"
            altText="Blog Guru"
          />
          <CardComponent
            bgColor="warning"
            title="PPDB"
            description="Penerimaan Siswa/i Baru"
            link="https://sdit.algibrani.sch.id/ppdb"
            image="https://algibrani.sch.id/assets/uploads/portalT.png"
            altText="PPDB"
          />
          <CardComponent
            bgColor="secondary"
            title="Kelulusan"
            description="Kelulusan Kelas Akhir"
            link="#"
            image="https://algibrani.sch.id/assets/uploads/ard.png"
            altText="Kelulusan"
          />
        </Row>

        {/* Carousel Section */}
        <CarouselComponent />
      </Container>
    </div>
  );
};

export default App;
