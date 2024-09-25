import React, { useRef, useState, useEffect } from "react";
import { skills } from "../data"; // Ensure this includes the icon data
import {
  Box,
  Container,
  Heading,
  Text,
  Icon,
  useColorMode,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import Carousel styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import arrow icons

export default function Skills() {
  const { colorMode } = useColorMode();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 15,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % skills.length);
      carouselRef.current.goToSlide(currentIndex, 500);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, skills]);

  const handleArrowClick = (direction) => {
    if (direction === "next") {
      setCurrentIndex((currentIndex + 1) % skills.length);
      carouselRef.current.next(500);
    } else {
      setCurrentIndex((currentIndex - 1 + skills.length) % skills.length);
      carouselRef.current.previous(500);
    }
  };

  return (
    <Box
      minHeight="50vh"
      id="skills"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }} // Responsive padding
      borderBottom="1px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
    >
      <Container
        maxW="96.9vw"
        px={{ base: 4, md: 10, sm: 0 }} // Responsive padding
        textAlign="center"
        mx="auto"
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }} // Responsive font sizes
          mb={4}
          color={colorMode === "light" ? "gray.900" : "white"}
        >
          My Graphic Design Skills
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }} // Responsive font sizes
          mb={8}
          color={colorMode === "light" ? "gray.600" : "gray.400"}
        >
          As a graphics designer, I've acquired a range of skills that enable me
          to create visually appealing designs. From logos to brochures, I've
          got you covered.
        </Text>

        <Box w="full" overflow="hidden">
          <Carousel
            maxWidth="100%"
            ref={carouselRef}
            responsive={responsive}
            containerClass="carousel-container"
            additionalTransfrom={0}
            arrows={false}
            itemClass="carousel-item"
            slidesToSlide={1} // Change this to 1
            swipeable={true}
            draggable={true}
            focusOnSelect={true}
          >
            {skills.map((skill) => (
              <Card
                key={skill.name}
                bg={colorMode === "light" ? "gray.200" : "gray.800"}
                color={colorMode === "light" ? "gray.600" : "gray.400"}
                p={4}
                border="1px solid"
                borderColor={colorMode === "light" ? "gray.200" : "gray.800"}
                borderRadius="lg"
                mx={1}
                mb={4}
                width="100%" // Ensure full width of the card
                maxWidth="300px" // Set a max width for larger screens
                _hover={{
                  bg: colorMode === "light" ? "gray.300" : "gray.700",
                  color: "white",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease-in-out",
                }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <CardHeader>
                  <Icon w={12} h={12} as={FontAwesomeIcon} icon={skill.icon} />
                </CardHeader>
                <CardBody>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                    {skill.name}
                  </Text>
                </CardBody>
              </Card>
            ))}
          </Carousel>
        </Box>

        <Box mt={4} display="flex" justifyContent="center" gap={4}>
          <Button
            onClick={() => handleArrowClick("prev")}
            variant="outline"
            colorScheme="teal"
            size={{ base: "sm", md: "md" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="1.5em" />
          </Button>
          <Button
            onClick={() => handleArrowClick("next")}
            variant="outline"
            colorScheme="teal"
            size={{ base: "sm", md: "md" }}
          >
            <FontAwesomeIcon icon={faArrowRight} size="1.5em" />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
