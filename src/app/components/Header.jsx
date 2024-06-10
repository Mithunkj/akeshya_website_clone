"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "@/app/styles/style.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Header() {
  const router = useRouter();
  const [display, setDislay] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navbar").style.boxShadow =
          "0px 2px 15px rgba(0, 0, 0, 0.1)";
        document.getElementById("navbar").style.padding = "0px";
      } else {
        document.getElementById("navbar").style.boxShadow = "none";
        document.getElementById("navbar").style.transition = "all 0.5s";
        document.getElementById("navbar").style.padding = "10px";
      }
    };

    window.onscroll = scrollFunction;

    // Clean up the event listener on component unmount
    return () => {
      window.onscroll = null;
    };
  }, []);
  return (
    <Navbar
      expand="lg"
      className={style.nav_bar}
      style={{ backgroundColor: "#fff" }}
      sticky="top"
      id="navbar"
    >
      <Container>
        <Navbar.Brand href="#">
          <h1 className={style.logo_text}>
            <a href="#">
              <img src="./logo.png" style={{ hight: "50px", width: "60px" }} />
              AKESHYA
            </a>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => {
            setDislay(!display);
          }}
          aria-controls="basic-navbar-nav"
          className={display ? "d-none border-0" : "border-0"}
        >
          <i className="bi mobile-nav-toggle bi-list fw-bold fs-2"></i>
        </Navbar.Toggle>
        <Navbar.Toggle
          onClick={() => {
            setDislay(!display);
          }}
          aria-controls="basic-navbar-nav"
          className={!display ? "d-none border-0" : "border-0"}
        >
          <i className="bi mobile-nav-toggle bi-x fw-bold fs-2"></i>
        </Navbar.Toggle>
        <Navbar.Collapse className="ms-auto m-2" id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link className={style.nav_link} href="#">
              Home
            </Nav.Link>
            <Nav.Link className={style.nav_link} href="#about">
              About
            </Nav.Link>
            <Nav.Link className={style.nav_link} href="#services">
              Services
            </Nav.Link>
            <button
              onClick={() => {
                router.push("#contact");
              }}
              className={style.primary_button}
            >
              Contact
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
