import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";

const Chat = ({ id, ArtisanId }) => {
  return (
    <Link to={`/client/chat/${id}`}>
      <Flex
        gap="3"
        align="center"
        className={`py-2 hover:bg-slate-200 ${
          Number(ArtisanId) === id && "bg-slate-200"
        }  cursor-pointer px-2 rounded-md`}
      >
        <Avatar
          size="5"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="3" weight="bold">
            Teodros Girmay {id}
          </Text>
          <Text as="div" size="3" color="gray">
            Engineering
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Chat;
