import React, { useContext } from "react";
import { Grid } from "@mui/material";

import Filter from "./Filter";
import FilterContext from "../contexts/FilterContext";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/26
 * This should iteratively loop through Filter[] and render each filter
 * Shared filter state should be managed here
 */
const FiltersBar = () => {
  const [allFilterData] = useContext(FilterContext);
  return (
    <Grid container>
      {Object.keys(allFilterData).map((key) => (
        <Grid item key={key} marginRight={2} marginTop={1}>
          <Filter filterLabel={key} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FiltersBar;
