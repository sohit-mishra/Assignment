import { Box, Heading } from "@chakra-ui/react";
import LineChart from "./LineChart";

export default function Chart() {
  return (
    <Box width="600px" margin="auto" textAlign="center">
      <Heading as="h2" size="lg" mb={4}>
        Weekly Temperature Trend
      </Heading>
      <LineChart />
    </Box>
  );
}
