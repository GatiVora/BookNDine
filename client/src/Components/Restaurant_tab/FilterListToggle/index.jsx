// import React from "react";
// import ToggleButton from "@material-ui/lab/ToggleButton";
// import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     width: "auto",
//     justifyContent: "space-between",
//     maxWidth: "220ox",
//   },
//   toggle: {
//     fontFamily: `'Raleway', sans-serif`,
//     fontSize: ".6rem",
//     border: "1px solid rgba(0, 0, 0, 0.12)",
//     borderRadius: "10px",
//     marginBottom: "10px",
//     width: "70px",
//     color: "rgba(0, 0, 0, 0.36)",
//     "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
//       borderRadius: "10px",
//     },
//     "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
//       borderRadius: "10px",
//       border: "1px solid rgba(0, 0, 0, 0.12)",
//     },
//     "&.Mui-selected": {
//       borderRadius: "10px",
//       background: "#000",
//       color: "#fff",
//     },
//     "&.MuiToggleButton-root": {
//       "&:hover": {
//         background: "#000",
//         color: "#fff",
//       },
//     },
//   },
// });

// const FilterListToggle = ({ options, value, selectToggle }) => {
//   const classes = useStyles();
//   return (
//     <ToggleButtonGroup
//       value={value}
//       onChange={selectToggle}
//       className={classes.root}
//       exclusive
//     >
//       {options.map(({ label, id, value }) => (
//         <ToggleButton className={classes.toggle} key={id} value={value}>
//           {label}
//         </ToggleButton>
//       ))}
//     </ToggleButtonGroup>
//   );
// };

// export default FilterListToggle;


import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between", // Align toggle buttons with space between
    maxWidth: "330px", // Set the maximum width to accommodate three cards
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: ".6rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    marginBottom: "10px",
    flexBasis: "calc(33.33% - 10px)", // Adjust width for three cards in a row
    flexGrow: 1, // Allow cards to grow to fill remaining space
    color: "rgba(0, 0, 0, 0.36)",
    margin: "0 5px", // Add margin between toggle buttons
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
    },
    "&.Mui-selected": {
      borderRadius: "10px",
      background: "#000",
      color: "#fff",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
});

const FilterListToggle = ({ options, value, selectToggle }) => {
  const classes = useStyles();
  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      className={classes.root}
      exclusive
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton className={classes.toggle} key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterListToggle;
