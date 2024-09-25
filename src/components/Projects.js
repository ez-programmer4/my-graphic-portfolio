import React from "react";
import { projects } from "../data";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Image,
  useColorMode,
} from "@chakra-ui/react";

export default function Projects() {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="projects"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }} // Adjusts padding vertically for smaller screens
      borderBottom="1px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
    >
      <Container
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 10 }} // Adjusts padding horizontally for smaller screens
        textAlign="center"
      >
        <Grid justify="center" align="center" mb={{ base: 6, md: 8 }}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} // Responsive font sizes
            mb={4}
            color={colorMode === "light" ? "gray.900" : "white"}
          >
            My Projects
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }} // Responsive font sizes for text
            mb={8}
            color={colorMode === "light" ? "gray.600" : "gray.400"}
          >
            As a graphic designer, I've created a variety of projects that
            showcase my skills in visual design and creativity. From logos to
            brochures, I've got you covered.
          </Text>
        </Grid>

        <Grid
          templateColumns={{
            base: "1fr", // Single column on smaller screens
            md: "repeat(2, 1fr)", // Two columns on medium screens
            lg: "repeat(3, 1fr)", // Three columns on larger screens
          }}
          gap={8} // Consistent gap between grid items
        >
          {projects.map((project) => (
            <GridItem key={project.title}>
              <Box
                bg={colorMode === "light" ? "gray.200" : "gray.800"}
                color={colorMode === "light" ? "gray.600" : "gray.400"}
                p={4}
                borderBottom="4px solid"
                borderBottomColor="green.500"
                borderRadius="lg"
                boxShadow="md"
                h="100%"
                w="full"
              >
                <Box position="relative" overflow="hidden" borderRadius="lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    w="full"
                    h={{ base: "150px", md: "200px" }} // Responsive height for images
                    objectFit="cover"
                    objectPosition="center"
                    borderRadius="lg"
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="full"
                    h="full"
                    bg={colorMode === "light" ? "gray.100" : "gray.900"}
                    opacity="0"
                    transition="opacity 0.3s ease"
                    _hover={{ opacity: 0.8 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="lg"
                  >
                    <Heading
                      as="h2"
                      fontSize={{ base: "md", md: "lg" }} // Responsive heading size
                      mb={2}
                      color={colorMode === "light" ? "gray.900" : "white"}
                    >
                      {project.title}
                    </Heading>
                    <Text
                      fontSize={{ base: "sm", md: "md" }} // Responsive text size
                      mb={2}
                      color={colorMode === "light" ? "gray.600" : "gray.400"}
                    >
                      {project.subtitle}
                    </Text>
                    <Link
                      href={project.link}
                      isExternal
                      color={colorMode === "light" ? "green.500" : "green.300"}
                      fontWeight="bold"
                    >
                      View Project
                    </Link>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
