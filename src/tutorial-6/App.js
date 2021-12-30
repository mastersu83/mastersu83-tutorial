import React from "react";

import { Button, Card, Col, Nav, Navbar, Row } from "react-bootstrap";
import CardItem from "./components/Card";

export default function App() {
  const { pathname } = window.location;
  const postId = pathname.split("/");
  const newPostId = postId[postId.length - 1];

  const post = [
    {
      id: 1,
      title: "Пост №1",
    },
    {
      id: 2,
      title: "Пост №2",
    },
    {
      id: 3,
      title: "Пост №3",
    },
  ];

  return (
    <div className="App">
      <header>
        <h2>
          <a href="/">React Blog</a>
        </h2>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="/home" href="/">
              Главная
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/about" href="/about">
              Обо мне
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/profile" href="/profile">
              Профиль
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <Row>
        {pathname === "/" &&
          post.map((i, index) => (
            <CardItem key={i.id} title={i.title} id={i.id} index={index} />
          ))}
      </Row>
      <Row>
        {pathname === `/post/${newPostId}` && (
          <Col md={4}>
            <h3>{post[newPostId - 1].title}</h3>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150x150"
              />
              <Card.Body>
                {/*<Card.Title>*/}
                {/*  <a href={`/post/${i.id}`}>Card title</a>*/}
                {/*</Card.Title>*/}
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Nav.Link href="/">
                  <Button>Назад</Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>

      {/* ТУТ ДОПИСАТЬ РОУТ НА ПОЛНУЮ ЗАПИСЬ */}
      {pathname === "/about" && (
        <Card>
          <Card.Body>Это мой личный сайт!</Card.Body>
        </Card>
      )}
      {pathname === "/profile" && (
        <Card>
          <Card.Body>Профиль</Card.Body>
        </Card>
      )}
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </div>
  );
}
