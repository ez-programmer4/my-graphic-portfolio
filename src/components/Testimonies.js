import React from "react";
import { PencilIcon, ChatIcon, UserIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Icon,
  useColorMode,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Testimonials() {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="testimonials"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={20}
      borderBottom="1px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
    >
      <Container
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 10 }}
        textAlign="center"
      >
        <Flex justify="center" align="center" mb={8}>
          <Icon
            as={PencilIcon}
            className="mx-auto inline-block w-8 h-8 mb-4"
            color={colorMode === "light" ? "gray.900" : "white"}
          />
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mb={4}
            color={colorMode === "light" ? "gray.900" : "white"}
          >
            What My Clients Say About My Graphic Design Services
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            mb={8}
            color={colorMode === "light" ? "gray.600" : "gray.400"}
          >
            As a beginner graphic designer, I've had the pleasure of working
            with a variety of clients across different industries. Here's what
            they have to say about my services.
          </Text>
        </Flex>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {testimonials.map((testimonial) => (
            <GridItem
              key={testimonial.name}
              bg={colorMode === "light" ? "gray.200" : "gray.800"}
              color={colorMode === "light" ? "gray.600" : "gray.400"}
              p={6}
              border="1px solid"
              borderColor={colorMode === "light" ? "gray.200" : "gray.800"}
              borderRadius="lg"
              boxShadow="lg"
            >
              <Icon
                as={ChatIcon}
                className="block w-8 h-8 text-gray-500 mb-4"
              />
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={colorMode === "light" ? "gray.900" : "white"}
                mb={4}
              >
                {testimonial.quote}
              </Text>
              <Flex align="center" mt={4}>
                <Icon as={UserIcon} className="w-12 h-12 text-gray-500" />
                <Box ml={4}>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color={colorMode === "light" ? "gray.900" : "white"}
                  >
                    {testimonial.name}
                  </Text>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color={colorMode === "light" ? "gray.600" : "gray.500"}
                  >
                    {testimonial.company}
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
