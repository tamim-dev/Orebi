import React, { useEffect, useState } from "react";
import Container from "./layout/Container";
import Image from "./layout/Image";
import List from "./layout/List";
import ListItem from "./layout/ListItem";
import { FaBars } from "react-icons/fa";

const Navber = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <nav className="lg:py-4">
      <Container>
        <div className="lg:flex">
          <div className="self-center lg:w-[40%]">
            <Image imgsrc="assets/Logo.png" />
          </div>
          <div className="w-4/6">
            <FaBars
              onClick={() => setShow(!show)}
              className="absolute right-2 top-2 ml-auto block cursor-pointer lg:hidden"
            />
            {show && (
              <List className="lg:font-medium mt-10 text-cGrey lg:mt-0 lg:flex lg:gap-12 lg:font-dm lg:text-lg">
                <ListItem
                  className="my-2.5 hover:text-black lg:my-0"
                  itemname="Home"
                />
                <ListItem
                  href="/shop"
                  className="my-2.5 hover:text-black lg:my-0"
                  itemname="Shop"
                />
                <ListItem
                  href="/about"
                  className="my-2.5 hover:text-black lg:my-0"
                  itemname="About"
                />
                <ListItem
                  href="/contact"
                  className="my-2.5 hover:text-black lg:my-0"
                  itemname="Contacts"
                />
              </List>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
