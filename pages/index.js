//nextjs plugin
import Image from 'next/image';
import { NextSeo } from 'next-seo';
//component
import { NavbarRow } from '../component/NavbarRow/NavbarRow';
import { SearchRow } from '../component/SearchRow/SearchRow';
import { StickerRow } from '../component/StickerRow/StickerRow';
//ui
import { Center, Grid, GridItem, Box } from '@chakra-ui/react';
//scss
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* TODO::首頁SEO */}
      <NextSeo title="羞蛋雞咧" description="今日最Hot新聞就在羞蛋雞咧!" />
      {/* TODO::功能選單Navbar & 新冠專題 */}
      <NavbarRow />
      <Center bg="white">
        <Box w="1400px" maxW="1400px" h="auto">
          {/* TODO::Logo & 關鍵字Search、熱門搜尋、天氣 */}
          <SearchRow />
          {/* TODO::分類列、新聞網來源列 */}
          <Grid templateColumns="repeat(7, 1fr)" gap={5}>
            {/* TODO::左側內容 */}
            <GridItem rowSpan={1} colSpan={5} bg="teal.100">
              {/* TODO::貼紙牆 */}
              <StickerRow />
              {/* TODO::各大熱門新聞條列 */}
            </GridItem>
            {/* TODO::右側選單廣告、一周大事 */}
            <GridItem rowSpan={1} colSpan={2} bg="teal.100" />
          </Grid>
          {/* TODO::頁角說明 */}
        </Box>
      </Center>
    </>
  );
}
