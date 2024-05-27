import { Box, Avatar, Text, SimpleGrid, Image, VStack } from "@chakra-ui/react";

const Profile = () => {
  const user = {
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    bio: "Photographer & Traveler",
    photos: [
      // Add URLs of sample photos here
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Avatar size="2xl" src={user.avatar} />
        <Text fontSize="2xl" fontWeight="bold">{user.name}</Text>
        <Text>{user.bio}</Text>
      </VStack>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mt={6}>
        {user.photos.map((photo, index) => (
          <Image key={index} src={photo} alt={`Photo ${index + 1}`} borderRadius="md" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Profile;