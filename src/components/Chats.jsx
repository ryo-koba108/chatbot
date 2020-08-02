import React from 'react'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import { Chat } from '.'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))
const Chats = (props) => {
  const classes = useStyles()
  return (
    <List className={classes.root}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()} />
      })}
    </List>
  )
}

export default Chats
