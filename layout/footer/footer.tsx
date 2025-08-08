import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Item>1</Item>
          <Item>1</Item>
        </Grid>
        <Grid size={6}>
          <Item>2</Item>
          <Item>2</Item>
        </Grid>
      </Grid>
      <Box
        component="footer"
        sx={{
          mt: 4,
          p: 2,
          textAlign: "center",
          bgcolor: "primary.main",
          color: "white",
          borderRadius: 1,
        }}
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} Your Website | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}