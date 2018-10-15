export const MaterialStyle = theme => ({
  Fab: {
    position: "fixed",
    top: "70vh",
    left: "80vw",
  },
  Card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5vh",
    width: "96vw",
    [theme.breakpoints.up('sm')]: {
      width: "60vw",
    },
    '&:first-child': {
      marginTop: "10vh",
    },
  },
  Card__Content: {
    padding: 0,
    paddingLeft: "1vw",
    width: "80%",
    wordWrap: "break-word"
  },
  Card__Action: {
    marginRight: "3vw"
  },
  Expansion: {
  }
});
