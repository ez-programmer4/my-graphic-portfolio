import {
  Flex,
  Link,
  Text,
  VStack,
  Icon,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaVk,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      maxW="1200px"
      mx="auto"
      px={4}
      py={8}
      bg={colorMode === "light" ? "gray.100" : "gray.900"} // Background color changes based on mode
      color={colorMode === "light" ? "gray.800" : "white"} // Text color changes based on mode
      borderTop="5px solid #4CAF50"
    >
      <VStack align="flex-start" spacing={4} mb={{ base: 6, md: 0 }}>
        <Image src="/logo.png" alt="My Graphics" w={40} h={40} />
      </VStack>
      <VStack align="flex-start" spacing={4}>
        <Text fontSize="lg" fontWeight="bold">
          Stay connected with me:
        </Text>
        <Flex>
          {[
            {
              icon: FaTwitter,
              color: "#1DA1F2",
              link: "https://twitter.com/@Ezedinebrahim1",
            },
            {
              icon: FaGithub,
              color: "#333",
              link: "https://github.com/ez-programmer4",
            },

            {
              icon: FaFacebook,
              color: "#4267B2",
              link: "https://facebook.com/mygraphics",
            },
            {
              icon: FaLinkedin,
              color: "#2867B2",
              link: "https://linkedin.com/in/ezedin-ebrahim-11a01732b/",
            },
            {
              icon: FaYoutube,
              color: "#FF0000",
              link: "https://youtube.com/@GeneralTruth1",
            },

            {
              icon: FaDiscord,
              color: "#7289DA",
              link: "",
            },
            {
              icon: FaTelegram,
              color: "#2867B2",
              link: "https://t.me/ezebrahim",
            },
            { icon: FaVk, color: "#45668E", link: "https://" },
          ].map(({ icon, color, link }, index) => (
            <Link
              href={link}
              isExternal
              key={index}
              _hover={{ transform: "scale(1.2)", color }}
            >
              <Icon
                as={icon}
                boxSize={6}
                mr={4}
                color={color}
                transition="transform 0.2s"
              />
            </Link>
          ))}
        </Flex>
      </VStack>
      <Text
        fontSize="sm"
        color={colorMode === "light" ? "gray.600" : "gray.400"} // Adjust footer text color based on mode
        textAlign={{ base: "center", md: "right" }}
      >
        &copy; 2023 My Graphics. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
