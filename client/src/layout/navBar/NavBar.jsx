import React, { useEffect, useReducer, useState } from "react";
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
  Input,
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import NavModal from "../../components/modals/form-modal/FormModal.jsx";
import { newSessionData, useSessionData } from "../../utils/commonFunctions";
import logo from "../../assets/images/jp-logo.png";
import {Avatar, AvatarIcon} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);
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

  let user = useSessionData("user");

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Profile",
      path: user ? `/job-seeker/profile/${user._id}` : "/job-seeker/login",
    },
    {
      label: mode ?  "Light Mode" :"Dark Mode",
      // path: "",
    },
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    {
      label: user ? "Logout" : "Login",
      path: user ? "" : "/job-seeker/login",
    },
  ];

  const handleChange = (item) => {
    setIsMenuOpen(false);

    if (item === "Logout") {
      openModal("Logout");
    }
    if (item === "Dark Mode" || item === "Light Mode") {
      changeMode();
    }

  };

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
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
        <NavbarBrand id="header">
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
            id="title"
          >
            Job-Portal
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/job-seeker/dashboard">
            Jobs
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
        <Input
          key="full"
          radius="full"
          placeholder="Search Jobs Here"
          className="w-[250px]"
        />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/job-seeker/dashboard">
            Notifications
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {user ? (
            <Button
              onClick={() => openModal("Logout")}
              color="primary"
              variant="ghost"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => openModal("login")}
              color="primary"
              variant="ghost"
            >
              Login
            </Button>
          )}
        </NavbarItem>
        <NavbarItem   className="hidden lg:flex">
          <Button color="primary" onClick={changeMode}>
            {mode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
            
          </Button>
        </NavbarItem>
        <NavbarItem   className="hidden lg:flex">
        <Avatar
        icon={<AvatarIcon />}
        classNames={{
          base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
          icon: "text-black/80",
        }}
       onClick={ () => {user?navigate(`/job-seeker/profile/${user._id}`):navigate("/job-seeker/login")}}
      />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={`${menuItem.label}-${index}`}>
            <Link
              className={
                index === 2
                  ? "text-primary"
                  : index === menuItems.length - 1
                  ? "text-danger"
                  : "text-foreground"
              }
              to={menuItem.path}
              size="lg"
              onClick={() => {
                handleChange(menuItem.label);
              }}
            >
              {menuItem.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
