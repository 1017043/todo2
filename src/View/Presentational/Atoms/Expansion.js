import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {MaterialStyle} from './MaterialStyle.js';
import '../../Style/index.css';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Expansion= (props) =>{
  const {classes} = props;
  return (
      <ExpansionPanel className={classes.Expansion}>
        <ExpansionPanelSummary classes={{
          root: classes.ExpansionPanelSummary__root,
          content: classes.ExpansionPanelSummary__content,
          expanded: classes.expanded
        }} expandIcon={<ExpandMoreIcon />}>
          <div className="test">{props.todo_text}</div>
          <div className="test">{props.todo_date}</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails classes={{
          root: classes.ExpansionPanelDetails,
        }}>
          <IconButton classes={{
            root: classes.IconButton__root__Edit,
          }} color="inherit" aria-label="Edit" onClick={props.ClickOutlineButton}>
            <EditIcon />
          </IconButton>
          <IconButton classes={{
            root: classes.IconButton__root__Delete,
          }} color="inherit" aria-label="Delete" onClick={props.ClickButtonOfDelete}>
            <DeleteIcon />
          </IconButton>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}


export default withStyles(MaterialStyle)(Expansion);
