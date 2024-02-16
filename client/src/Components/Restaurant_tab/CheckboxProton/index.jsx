// import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0",
  },
  label: {
    fontSize: "0.8rem",
    // fontFamily
  },
});

const CheckboxProton = ({ cuisine, changeChecked }) => {
  const classes = useStyles();
  const { checked, label, id } = cuisine;
  return (
    <FormControlLabel
      classes={{
        label: classes.label,
        root: classes.wrap,
      }}
      control={
        <Checkbox
          classes={{
            checked: classes.checked,
            root: classes.root,
          }}
          size="small"
          checked={checked}
          onChange={() => changeChecked(id)}
        />
      }
      label={label}
    />
  );
};

export default CheckboxProton;
