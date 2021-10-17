import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { HamburgerIcon, BellIcon, SunIcon } from '@chakra-ui/icons';

export const StickerRow = () => {
  return (
    <Grid
      h="500px"
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(9, 1fr)"
      gap={5}
    >
      <GridItem rowSpan={6} colSpan={8} bg="orange.50" />
      <GridItem rowSpan={3} colSpan={4} bg="orange.50" />
      <GridItem rowSpan={3} colSpan={4} bg="orange.50" />
      <GridItem rowSpan={3} colSpan={3} bg="orange.50" />
      <GridItem rowSpan={3} colSpan={3} bg="orange.50" />
      <GridItem rowSpan={3} colSpan={3} bg="orange.50" />
      <GridItem rowSpan={3} colSpan={3} bg="orange.50" />
    </Grid>
  );
};
