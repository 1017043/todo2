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
    width: "calc(100% - 53px)",
    wordWrap: "break-word"
  },
  Card__Action: {
    marginRight: "3vw",
  },
  Expansion: {
    padding: 0,
    boxShadow: "0px 0px 0px 0px"
  },
  ExpansionPanelSummary__root: {
    padding: 0,
    margin: 0,
    '&$expanded': {
        minHeight: 0,
    },
  },
  ExpansionPanelSummary__expanded: {},
  ExpansionPanelSummary__content: {
    padding: 0,
    margin: 0,
    width: "calc(100% - 48px)",
    flexDirection: "column",
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
  ExpansionPanelDetails: {
    padding: 0,
  },
  IconButton__root__Edit: {
    padding: 0,
  },
  IconButton__root__Delete: {
    padding: 0,
    marginLeft: "1vw"
  },
});
