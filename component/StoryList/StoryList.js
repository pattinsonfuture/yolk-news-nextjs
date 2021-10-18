import React from 'react';
import { Text, Box, Grid, Img, Wrap, GridItem } from '@chakra-ui/react';
const Story = () => {
  return (
    <Box marginBottom="15px" h="180px">
      <Box
        backgroundColor="black"
        w="100%"
        h="5px"
        m="auto"
        marginBottom="15px"
      />
      <Grid
        templateColumns="5fr 2fr 0.5fr"
        gap="3"
        h="160px"
        maxH="160px"
        objectFit="contain"
        overflow="hidden"
      >
        <GridItem colSpan={1}>
          <Text
            marginBottom="auto"
            fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
            lineHeight="1.2"
            fontWeight="bold"
            noOfLines={3}
          >
            30歲BNT預約今10時開跑！
            第12輪一階135.8萬人符資格30歲BNT預約今10時開跑！
            第12輪一階135.8萬人符資格30歲BNT預約今10時開跑！
            第12輪一階135.8萬人符資格30歲BNT預約今10時開跑！
            第12輪一階135.8萬人符資格
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Img
            // m="auto"
            borderRadius="15px"
            //   h="160px"
            w="100%"
            h="100%"
            src="https://picsum.photos/500"
            alt="30歲BNT預約今10時開跑！ 第12輪一階135.8萬人符資格"
            objectFit="cover"
            loading="lazy"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Text textAlign="right" fontSize="xl" lineHeight="2">
            2021
            <Wrap />
            10/18
            <Wrap />
            09:33
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export const StoryList = () => {
  return (
    <>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </>
  );
};
