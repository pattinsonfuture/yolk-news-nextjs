import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

export const Category = () => {
  return (
    <Flex>
      {/* 分類大標題 */}
      <Text fontSize="140px" lineHeight="1" fontWeight="bold">
        H
      </Text>
      <Box>
        <Text fontSize="80px" lineHeight="1" fontWeight="bold">
          ot
        </Text>
        <Text fontSize="40px" lineHeight="1" fontWeight="bold">
          熱門
        </Text>
      </Box>
    </Flex>
  );
};
