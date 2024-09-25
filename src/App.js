import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  VStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Testimonies from "./components/Testimonies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isToggleFixed, setIsToggleFixed] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsToggleFixed(window.pageYOffset > 100);
      setShowScrollToTop(window.pageYOffset > 200);
      setShowScrollToBottom(
        window.pageYOffset + window.innerHeight >= document.body.scrollHeight
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <Box
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.900" : "gray.400"}
      minH="100vh"
      transition="background-color 0.3s ease-in-out"
    >
      <Navbar />
      <Flex
        justify="flex-end"
        mr={4}
        position={isToggleFixed ? "fixed" : "static"}
        top={isToggleFixed ? "20px" : "auto"}
        right={isToggleFixed ? "20px" : "auto"}
        zIndex={isToggleFixed ? 999 : "auto"}
      >
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <BsSun />}
          onClick={toggleColorMode}
          aria-label="Toggle Color Mode"
          title="Toggle Color Mode"
          mr={2}
          borderBottom="2px solid #34C759"
        />
        {showScrollToTop && (
          <IconButton
            icon={<FaArrowUp />}
            onClick={handleScrollToTop}
            aria-label="Scroll to Top"
            title="Scroll to Top"
            borderBottom="2px solid #34C759"
          />
        )}
      </Flex>
      <Container maxW="container.xl" py={10} px={5} mx="auto">
        <VStack spacing={10}>
          <About />
          <Projects />
          <Skill />
          <Testimonies />
          <Contact />
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
