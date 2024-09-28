import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import React from "react";

const ChatHeader = ({ ArtisanId }) => {
  return (
    <Flex gap="5" align="center" className="py-2 px-2 rounded-md">
      <Avatar
        size="3"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        radius="full"
        fallback="T"
      />
      <Box>
        <Text as="div" size="3" weight="bold">
          Teodros Girmay {ArtisanId}
        </Text>
        <Text as="div" size="3" color="gray">
          Engineering
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatHeader;
