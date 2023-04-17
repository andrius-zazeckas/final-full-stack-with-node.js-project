import { Box, Typography } from "@mui/material";
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100px"
      // marginTop="100px"
      bgcolor="#DFE6E9"
      textAlign="center"
      // paddingBottom="200px"
      position="absolute"
      bottom="0"
      aria-label="footer"
    >
      <Typography
        textAlign="center"
        variant="body2"
        color="text.secondary"
        align="center"
      >
        © Events manager
      </Typography>
    </Box>
  );
};
