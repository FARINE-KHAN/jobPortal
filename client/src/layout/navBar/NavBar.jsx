import React, { useEffect, useState } from "react";
import "./NavBar.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import NavModal from "../../components/nav-modal/NavModal";
import { newSessionData } from "../../utils/commonFunctions";
import logo from "../../assets/images/jp-logo.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [modal, setModal] = useState(false);
  const [pageId, setPageId] = useState("");
  const [mode, setMode] = useState(true);

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const openModal = (page) => {
    setPageId(page);
    setModal(true);
  };

  const menuItems = [
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "My Settings", path: "/settings" },
    { label: "Help & Feedback", path: "/help" },
    { label: "Log Out", path: "/logout" },
  ];

  const changeMode = () => {
    setMode(!mode);
    if (mode) {
      document.documentElement.classList.remove("dark");
      newSessionData("dark-mode", mode);
    } else {
      document.documentElement.classList.add("dark");
      newSessionData("dark-mode", mode);
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("transparent-bg", !mode);
    newSessionData("dark-mode", mode);
  }, [mode]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={mode ? "light-mode" : "dark-mode"}
    >
      {modal && (
        <NavModal
          setModal={setModal}
          handleNavigation={handleNavigation}
          pageId={pageId}
        />
      )}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src={logo}
            alt="logo"
            onClick={() => handleNavigation("/")}
            title="Home"
            className="cursor-pointer"
          />
          <p
            onClick={() => handleNavigation("/")}
            title="Home"
            className="font-bold text-inherit cursor-pointer"
          >
            Job-Portal
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            onClick={() => openModal("login")}
            color="primary"
            variant="ghost"
          >
            Login
          </Button>
        </NavbarItem>
        {/* <NavbarItem>
          <Button
            onClick={() => openModal("register")}
            color="primary"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <Button color="primary" onClick={changeMode}>
            {mode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={`${menuItem.label}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={menuItem.path}
              size="lg"
            >
              {menuItem.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
