import { Box, SimpleGrid, Image } from "@chakra-ui/react";

const Home = () => {
  const photos = [
    // Add URLs of sample photos here
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
        {photos.map((photo, index) => (
          <Image key={index} src={photo} alt={`Photo ${index + 1}`} borderRadius="md" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;