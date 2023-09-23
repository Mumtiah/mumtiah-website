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
      display="block"
      w="1.5rem"
      h="1.5rem"
      pos="relative"
      aria-hidden
      pointerEvents="none"
    >
      <Flex>
        <Box>
          <Bar
            top="0.2375rem"
            _groupActive={{
              top: "0.2875rem",
              transform: "rotate(45deg)",
            }}
          />
          <Bar
            top="0.5875rem"
            _groupActive={{
              top: "0.5875rem",
              transform: "rotate(-45deg)",
            }}
          />
          <Bar
            bottom="0.4375rem"
            _groupActive={{
              bottom: "0.6875rem",
              transform: "rotate(-45deg)",
            }}
          />
        </Box>

        {isOpen && <Text fontSize="16px"> Menu</Text>}
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
