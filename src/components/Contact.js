import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  FormLabel,
  FormControl,
  Link,
  useColorMode,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function Contact() {
  const { colorMode } = useColorMode();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [alertStatus, setAlertStatus] = React.useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const { isOpen, onClose } = useDisclosure();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://backend-portfolio-hjtx.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          setAlertStatus({
            isOpen: true,
            type: "success",
            message: "Message sent successfully!",
          });
        } else {
          setAlertStatus({
            isOpen: true,
            type: "error",
            message: "Error sending message.",
          });
        }
      })
      .catch((error) => {
        setAlertStatus({
          isOpen: true,
          type: "error",
          message: error.message,
        });
      });
  }

  return (
    <Box
      id="contact"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }} // Responsive padding
    >
      <Container maxW="container.xl" mx="auto" px={{ base: 4, md: 10 }}>
        <Flex direction={{ base: "column", md: "row" }} align="flex-start">
          <Box flex="1" pr={{ md: 10 }} mb={{ base: 8, md: 0 }}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              mb={4}
              color={colorMode === "light" ? "gray.900" : "white"}
              fontWeight="bold"
            >
              Get in Touch
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              mb={8}
              color={colorMode === "light" ? "gray.600" : "gray.400"}
            >
              As a graphic designer, I'm eager to collaborate on innovative
              visual projects and help bring your ideas to life. If you have a
              design concept or need assistance with branding, feel free to
              reach out!
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              mb={8}
            >
              <Button
                as={Link}
                href="mailto:ezedinebrahim131@gmail.com"
                variant="solid"
                colorScheme="green"
                size="lg"
                borderRadius="md"
                boxShadow="md"
                mb={{ base: 2, md: 0 }}
                w={{ base: "full", md: "auto" }} // Full width on small screens
                _hover={{ boxShadow: "lg" }}
              >
                Email Me
              </Button>
              <Button
                as={Link}
                href="https://www.linkedin.com/in/ezedin-ebrahim-11a01732b/"
                variant="outline"
                colorScheme="gray"
                size="lg"
                borderRadius="md"
                boxShadow="md"
                w={{ base: "full", md: "auto" }} // Full width on small screens
                _hover={{ bg: "gray.200", borderColor: "gray.400" }}
              >
                Connect on LinkedIn
              </Button>
            </Flex>
          </Box>
          <Box flex="1" pl={{ md: 10 }}>
            <form name="contact" onSubmit={handleSubmit}>
              <FormControl isRequired mb={4}>
                <FormLabel
                  fontSize="lg"
                  mb={2}
                  color={colorMode === "light" ? "gray.900" : "white"}
                >
                  Name
                </FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  fontSize="lg"
                  borderColor={colorMode === "light" ? "gray.400" : "gray.500"}
                  _focus={{
                    borderColor: "green.500",
                    boxShadow: "0 0 0 1px green.500",
                  }}
                  borderRadius="md"
                  p={4}
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel
                  fontSize="lg"
                  mb={2}
                  color={colorMode === "light" ? "gray.900" : "white"}
                >
                  Email
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  fontSize="lg"
                  borderColor={colorMode === "light" ? "gray.400" : "gray.500"}
                  _focus={{
                    borderColor: "green.500",
                    boxShadow: "0 0 0 1px green.500",
                  }}
                  borderRadius="md"
                  p={4}
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel
                  fontSize="lg"
                  mb={2}
                  color={colorMode === "light" ? "gray.900" : "white"}
                >
                  Message
                </FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  fontSize="lg"
                  borderColor={colorMode === "light" ? "gray.400" : "gray.500"}
                  _focus={{
                    borderColor: "green.500",
                    boxShadow: "0 0 0 1px green.500",
                  }}
                  borderRadius="md"
                  p={4}
                  rows={5}
                />
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                colorScheme="green"
                size="lg"
                w="full"
                borderRadius="md"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                Submit
              </Button>
            </form>
            {alertStatus.isOpen && (
              <Alert status={alertStatus.type} mt={4} borderRadius="md">
                <AlertIcon />
                <AlertTitle>
                  {alertStatus.type === "success" ? "Success!" : "Error!"}
                </AlertTitle>
                <AlertDescription>{alertStatus.message}</AlertDescription>
                <CloseButton
                  onClick={onClose}
                  position="absolute"
                  right="8px"
                  top="8px"
                />
              </Alert>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contact;
