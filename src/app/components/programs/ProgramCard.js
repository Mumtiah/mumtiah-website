import { Box, Grid, AspectRatio, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const ProgramCard = ({
  media,
  isVideo = false,
  heroText,
  sublineText,
}) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      alignItems="center"
      width="full"
      p={5}
      maxH="476px"
    >
      {/* Media Section */}
      <Box>
        {isVideo ? (
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={media}
              title="Embedded Youtube Video"
              allowFullScreen
            />
          </AspectRatio>
        ) : (
          <AspectRatio ratio={16 / 9}>
            <img width={"100%"} height="100%" src={media} alt="Image Alt" />
          </AspectRatio>
        )}
      </Box>

      {/* Text Section */}

      <Box bg="#CCF6DD" height={"100%"} p={4}>
        <Text fontSize="2xl" fontWeight="semibold" mb={3}>
          {heroText}
        </Text>
        <Text fontSize="lg" mb={5}>
          {sublineText}
        </Text>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          <Link href={"/enroll"}>Apply</Link>
        </Button>
      </Box>
    </Grid>
  );
};

// export ProgramCard;
