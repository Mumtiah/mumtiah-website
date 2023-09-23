import { Box, IconButton, chakra, Text, Flex } from "@chakra-ui/react";

export const ToggleButton = (props) => {
  const { isOpen, ...iconButtonProps } = props;
  return (
    <IconButton
      variant="unstyled"
      display="inline-flex"
      size="xs"
      icon={<ToggleIcon active={isOpen} />}
      {...iconButtonProps}
    />
  );
};
const ToggleIcon = (props) => {
  const { active } = props;
  return (
    <Box
      color="fg.accent.muted"
      className="group"
      data-active={active ? "" : undefined}
      as="span"
      w="1.5rem"
      h="1.5rem"
      pos="relative"
      aria-hidden
      pointerEvents="none"
    >
      <Flex>
        <Box>
          <Bar top="0.2375rem" />
          <Bar top="0.5875rem" />
          <Bar bottom="0.4375rem" />
        </Box>
        <Box>
          {active && (
            <Text marginLeft={"10px"} fontSize="16px">
              {" "}
              Menu
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
const Bar = chakra("span", {
  baseStyle: {
    display: "block",
    pos: "absolute",
    w: "1.25rem",
    h: "0.125rem",
    rounded: "full",
    bg: "currentcolor",
    mx: "auto",
    insetStart: "0.125rem",
    transition: "all 0.12s",
  },
});
