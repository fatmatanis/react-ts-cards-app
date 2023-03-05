import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { ICardItemProps } from "../../types/types";

const CardItem = ({ cards }: ICardItemProps) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap={2}
      padding="64px 24px"
    >
      {cards.map(
        ({ name, nationality, age, birthday, deathday, gender, height }, i) => (
          <Grid container key={i} textAlign="center" gap={1}>
            <Grid item xs={12}>
              <Typography variant="h4">{name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Age: {age}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Born: {birthday}</Typography>
            </Grid>
            {deathday && (
              <Grid item xs={12}>
                <Typography variant="body1">Death: {deathday}</Typography>
              </Grid>
            )}
            {nationality && (
              <Grid item xs={12}>
                <Typography variant="body1">
                  Nationality: {nationality.toUpperCase()}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="body1">Gender: {gender}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Height: {height}</Typography>
            </Grid>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default CardItem;
