//nextjs plugin
import Image from 'next/image';
import { NextSeo } from 'next-seo';
//component
import { Category } from '../component/Category/Category';
import { StoryList } from '../component/StoryList/StoryList';
import { SearchRow } from '../component/SearchRow/SearchRow';
import { StickerRow } from '../component/StickerRow/StickerRow';
//ui
import {
  Center,
  Grid,
  GridItem,
  Box,
  Heading,
  Flex,
  Text,
  Stack,
  Container,
  Spacer,
  Img,
  Wrap,
} from '@chakra-ui/react';
//scss
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* TODO::首頁SEO */}
      <NextSeo title="羞蛋雞咧" description="今日最Hot新聞就在羞蛋雞咧!" />
      {/* TODO::功能選單Navbar & 新冠專題 */}
      <Center bg="#f6f2ef">
        <Box w="1200px" maxW="1200px" h="auto">
          <Box p="20px" textAlign="center">
            <Heading size="2xl">News</Heading>
            <Box backgroundColor="black" w="200px" h="5px" m="auto" />
          </Box>
          <Grid templateColumns="repeat(6, 1fr)" h="100vh" p="20px" gap="5">
            <GridItem colSpan={2} bg="white" borderRadius="20px" />
            <GridItem colSpan={4}>
              <Category />
              <StoryList />
            </GridItem>
          </Grid>
          {/* TODO::Logo & 關鍵字Search、熱門搜尋、天氣 */}
          {/* TODO::分類列、新聞網來源列 */}
          {/* TODO::左側內容 */}
          {/* TODO::貼紙牆 */}
          {/* TODO::各大熱門新聞條列 */}
          {/* TODO::右側選單廣告、一周大事 */}
          {/* TODO::頁角說明 */}
        </Box>
      </Center>
    </>
  );
}
