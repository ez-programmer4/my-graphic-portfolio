import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ezedinImage from "../photo.png"; // Adjust the path as necessary

function About() {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="about"
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={10}
      minHeight="85vh"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      borderBottom="4px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
    >
      <Container maxW="container.xl" mx="auto" px={{ base: 4, md: 10 }}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          wrap="wrap" // Allow wrapping on smaller screens
        >
          <Box
            flex="1"
            mb={{ base: 6, md: 0 }}
            textAlign={{ base: "center", md: "left" }}
            order={{ base: 2, md: 1 }}
            maxWidth={{ base: "100%", md: "50%" }} // Limit width on larger screens
            px={{ base: 4, md: 0 }} // Add padding for mobile
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              mb={4}
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I'm Ezedin.
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Text
                  as="span"
                  variant="typing"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                >
                  I'm a Graphic Designer.
                </Text>
              </motion.div>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              mb={8}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              As a graphic designer, I’m eager to collaborate with others and
              learn from experienced professionals. My passion lies in using
              design tools like Adobe Creative Suite to create visually
              appealing designs that tell unique stories and build impactful
              brand identities.
            </Text>
            <Flex
              justify={{ base: "center", md: "flex-start" }}
              align="center"
              gap={4}
              flexWrap="wrap" // Allow buttons to wrap on smaller screens
            >
              <Button
                as={Link}
                href="#contact"
                variant="solid"
                colorScheme="green"
                size={{ base: "sm", md: "md" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Let's build something together
              </Button>
              <Button
                as={Link}
                href="#projects"
                variant="outline"
                colorScheme="gray"
                size={{ base: "sm", md: "md" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Check out my past projects
              </Button>
              <Button
                as={Link}
                href="https://drive.google.com/file/d/1i9KHKcb3lu4H_XFr5Okfw5PluncQa0DK/view?usp=sharing" // Replace with your actual Google Drive link
                variant="solid"
                colorScheme="blue"
                size={{ base: "sm", md: "md" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                target="_blank" // Opens link in a new tab
              >
                Download My CV
              </Button>
            </Flex>
          </Box>
          <Box
            flex="1"
            order={{ base: 1, md: 2 }}
            maxWidth={{ base: "100%", md: "50%" }} // Limit width on larger screens
            px={{ base: 4, md: 0 }} // Add padding for mobile
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Image
                src={ezedinImage}
                objectFit="cover"
                objectPosition="center"
                rounded="lg"
                width="100%" // Ensure the image fills its container
                maxWidth="780px"
                mx="auto"
              />
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default About;
