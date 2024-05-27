import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log("File uploaded:", file);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input type="file" onChange={handleFileChange} />
        <Button colorScheme="blue" onClick={handleUpload}>Upload Photo</Button>
      </VStack>
    </Box>
  );
};

export default Upload;