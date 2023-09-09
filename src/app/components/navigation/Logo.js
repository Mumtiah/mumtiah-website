import { Image, Box } from "@chakra-ui/react";
import Link from "next/link";

export const Logo = (props) => (
  <Box
    display={{
      base: "none",
      lg: "flex",
    }}
  >
    <Link href={"/"}>
      <Image
        src={"/images/mumtiah-logo.png"}
        alt="Mumtiah Logo"
        width={{ base: "36px", lg: "73px" }}
        height={{ base: "40px", lg: "81px" }}
        {...props}
      />
    </Link>
  </Box>
);
