import {
  Box,
  Flex,
  Link,
  Button,
  IconButton,
  Image,
  useColorMode,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons"; // Import EmailIcon
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const hasMountedRef = useRef(false);

  useEffect(() => {
    hasMountedRef.current = true;
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box
      bg={colorMode === "light" ? "gray.100" : "gray.800"}
      color={colorMode === "light" ? "gray.800" : "white"}
      pt={4}
      pb={2}
      sticky
      top={0}
      zIndex={10}
      boxShadow="md"
      borderBottom="4px solid"
      borderBottomColor="green.500"
    >
      <Flex
        justify="space-between"
        align="center"
        flexWrap="wrap"
        px={{ base: 4, md: 10 }}
      >
        <Box>
          <Link href="#about" aria-label="Navigate to About">
            <motion.div
              initial={{ rotate: 0 }}
              animate={hasMountedRef.current ? {} : { rotate: 360 }}
              transition={
                hasMountedRef.current ? {} : { duration: 1, repeat: 1 }
              }
            >
              <Image src={require("../logo.png")} alt="Logo" width="70px" />
            </motion.div>
          </Link>
        </Box>
        {isLargerThan768 ? (
          <Flex align="center">
            <Link
              href="#projects"
              fontSize="lg"
              color="gray.600"
              _hover={{ color: "green.500" }}
              mr={5}
              aria-label="Navigate to Past Work"
            >
              Past Work
            </Link>
            <Link
              href="#testimonials"
              fontSize="lg"
              color="gray.600"
              _hover={{ color: "green.500" }}
              mr={5}
              aria-label="Navigate to Testimonials"
            >
              Testimonials
            </Link>
            <Button
              as={Link}
              href="#contact"
              variant="solid"
              colorScheme="green"
              size="md"
              aria-label="Contact Me"
              leftIcon={<EmailIcon />} // Add icon here
            >
              Contact Me
            </Button>
          </Flex>
        ) : (
          <Menu isOpen={isOpen}>
            <MenuButton
              as={IconButton}
              aria-label="Toggle Navigation Menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={toggleMenu}
              variant="outline"
              colorScheme="green"
            />
            <MenuList>
              <MenuItem
                as={Link}
                href="#projects"
                aria-label="Navigate to Past Work"
              >
                Past Work
              </MenuItem>
              <MenuItem
                as={Link}
                href="#testimonials"
                aria-label="Navigate to Testimonials"
              >
                Testimonials
              </MenuItem>
              <MenuItem as={Link} href="#contact" aria-label="Contact Me">
                Contact me
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
