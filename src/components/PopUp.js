import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';

import { blue } from '@mui/material/colors';

//const items = ['user 1', 'uesr 2 ' , 'user3' , 'user 4' , 'user5'];

export default function PopUp(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
      onClose(value);
      console.log(value);
  };

  return (
      <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{ width: '400px' }}>{props.title}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {props.list.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
                <ListItemText primary={email} />
          </ListItem>
        ))}

      </List>
    </Dialog>
  );
}

PopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

