import { Typography, Box } from "@/ui";

interface BannerProps {}

function Banner(props: BannerProps) {
  return (
    <Box>
      <Typography variant="h1">5 items</Typography>
      <Typography variant="h1">Furniture</Typography>
      <Typography variant="h1">Read More</Typography>
    </Box>
  );
}

export default Banner;
