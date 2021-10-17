import React from 'react';
import {
  Grid,
  GridItem,
  Img,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
//時間
import dayjs from 'dayjs';

dayjs.locale('zh-tw');

export const SearchRow = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '898a597a377b1a972c2731a5bc103c68',
    lat: '25.0330',
    lon: '121.5654',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  console.log(data);
  return (
    <Grid h="auto" templateColumns="repeat(8, 1fr)" gap={5}>
      <GridItem rowSpan={1} colSpan={2} textAlign="center">
        <Img
          m="0 auto"
          h="-webkit-fit-content"
          src="https://i.imgur.com/ly3sJKu.png"
          alt="Logo"
          objectFit="contain"
          loading="lazy"
          objectPosition="center"
        />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={4}
        textAlign="center"
        justifyItems="center"
      >
        <Center w="100%" h="100%">
          <InputGroup size="md" m="auto">
            <Input
              borderColor="gray.200"
              placeholder="請輸入關鍵字"
              focusBorderColor="unset"
              borderRadius="20px"
            />
            <InputRightElement>
              <IconButton
                // shadow="teal.900"
                borderTopLeftRadius="0"
                borderBottomLeftRadius="0"
                borderRightRadius="20px"
                borderColor="gray.200"
                aria-label="Search news"
                icon={<SearchIcon />}
                variant="outline"
              />
            </InputRightElement>
          </InputGroup>
        </Center>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        {isLoading && data ? (
          <>Loading</>
        ) : (
          <Stat>
            <StatLabel fontWeight="bold">
              <Flex>
                {data && dayjs(data.current.date).format('MM/DD')}
                {` 台北市 `}
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 -5 35 40"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d={data && data.current.icon} fill="#4285F4" />
                  </g>
                </svg>
              </Flex>
            </StatLabel>
            <StatNumber>
              {data && `${data.current.temperature.current} °C`}
            </StatNumber>
          </Stat>
        )}
      </GridItem>
    </Grid>
  );
};
