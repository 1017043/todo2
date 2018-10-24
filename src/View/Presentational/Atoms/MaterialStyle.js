export const MaterialStyle = theme => ({
  AppTopBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  Fab: {
    position: "fixed",
    bottom: "80px",
    right: "40px",
    [theme.breakpoints.down('sm')]: {
      bottom: "40px",
      right: "20px",
    },
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
  Card__Red: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5vh",
    width: "96vw",
    background: "red",
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
    width: "calc(100% - 40px)",
    wordWrap: "break-word",
    '&:last-child':{
      paddingBottom:0
    },
  },
  Card__Content__Red: {
    padding: 0,
    paddingLeft: "1vw",
    width: "calc(100% - 53px)",
    wordWrap: "break-word",
    background: "red",
    '&:last-child':{
      paddingBottom:0
    },
  },
  Card__Action: {
    padding: 0,
    margin: "0 6px"
  },
  Expansion: {
    padding: 0,
    boxShadow: "0px 0px 0px 0px",
    background: "transparent"
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
  PickerDatetime: {
    width: 200
  },
  CardAdd:{},
  CardAdd__Content:{},
  TextField: {
    width: "100%",
    minWidth: 200
  },
  FromControl__marginNormal: {
    marginTop: 0,
  },
  CardAction__CardEnterTextAndData__root: {
    padding: '8px 16px',
    [theme.breakpoints.up('sm')]: {
      padding: '8px 24px',
    },
  },
  ButtonOfAddcard: {
    width: "100%",
    minWidth: 200,
    display: "flex",
    justifyContent: "space-between",
  },
  ButtonOfAddcard__Send: {
  },
  ButtonOfAddcard__Cancel: {
  },
  AppSelectFormControl: {
    margin: "10px 0"
  }
});
