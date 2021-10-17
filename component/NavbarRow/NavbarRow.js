import React from 'react';
import { Flex, Spacer, Box, Heading, Center } from '@chakra-ui/react';
import { HamburgerIcon, BellIcon, SunIcon } from '@chakra-ui/icons';

export const NavbarRow = () => {
  const iconRes = { base: 6, md: 8, xl: 8 };
  return (
    <Center height="50px" bg="gray.700">
      <Flex
        w="1400px"
        maxW="1400px"
        color="white"
        alignItems="center"
        justifyContent="center"
      >
        <Box p="2">
          <HamburgerIcon w={iconRes} h={iconRes} />
        </Box>
        <Spacer />
        <Heading
          fontSize={{ base: '14px', md: '22px', xl: '24px' }}
          isTruncated
        >
          前往COVID-19新冠病毒專區
        </Heading>
        <Spacer />
        <Flex>
          <Box p="2" marginRight={{ base: 0, md: 5, xl: 5 }}>
            <BellIcon w={iconRes} h={iconRes} />
          </Box>
          <Box p="2" marginRight={{ base: 0, md: 5, xl: 20 }}>
            <SunIcon w={iconRes} h={iconRes} />
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
};
