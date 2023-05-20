import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import {FolderIcon} from '@mui/icons-material'
import React from 'react'

export default function ResponseList() {
  return (
    <div>
        <List >

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary="secondary-item"
                  />
                </ListItem>,
              
            </List>
    </div>
  )
}
