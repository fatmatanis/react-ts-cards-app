import React from "react";
import { Grid, styled, Typography, useMediaQuery } from "@mui/material";
import { ICardItemProps } from "../../types/types";

const ImgLeft = styled("img")({
  maxWidth: "100%",
  borderBottomRightRadius: 28,
  borderTopRightRadius: 28
});

const ImgRight = styled("img")({
  maxWidth: "100%",
  borderBottomLeftRadius: 28,
  borderTopLeftRadius: 28
});

const CardItem = ({ cards }: ICardItemProps) => {
  const isMobile = useMediaQuery("(min-width:900px)");

  const cardsArr = cards.map((item, i) =>
    i % 2 === 0 && isMobile ? (
      <Grid container rowGap={4} width="100%" key={item.id}>
        <Grid item md={6} xs={12} pr={8}>
          <ImgLeft alt="complex" src={item.image} />
        </Grid>
        <Grid
          container
          item
          margin="auto"
          xs={1}
          columns={{ md: 2, xs: 1 }}
          rowSpacing={2}
          pr={{ md: 12, xs: 8 }}
          pl={2}
        >
          <Grid item xs={6}>
            <Typography
              variant="h6"
              color="primary.main"
              fontWeight="bold"
              component="div"
            >
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={6} margin="auto">
            <Typography
              variant="subtitle1"
              color="secondary.dark"
              component="div"
            >
              {item.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    ) : (
      <Grid container rowGap={4} width="100%" key={item.id}>
        <Grid
          container
          item
          margin="auto"
          xs={1}
          columns={{ md: 2, xs: 1 }}
          rowSpacing={2}
          pr={{ md: 12, xs: 8 }}
          pl={2}
        >
          <Grid item xs={6}>
            <Typography
              variant="h6"
              color="primary.main"
              fontWeight="bold"
              component="div"
            >
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={6} margin="auto">
            <Typography
              variant="subtitle1"
              color="secondary.dark"
              component="div"
            >
              {item.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} pl={8}>
          <ImgRight alt="complex" src={item.image} />
        </Grid>
      </Grid>
    )
  );
  return (
    <Grid container width="100%" rowGap={8}>
      {cardsArr}
    </Grid>
  );
};

export default CardItem;
