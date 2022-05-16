import React, { forwardRef, useState, useEffect } from "react";
import "./Post.css";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from '@material-ui/icons/Delete';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Post = forwardRef(
  ({ displayName, text, personal, onClick }, ref) => {
    const classes=useStyles();
  const [post,setPost]=useState(null)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>response.json())
    .then(response=>{
      const {body}=response
      setPost(body)
    })
  },[])
    const [opacity,setOpacity]=useState(0.3);

    const opac=()=>{
      setOpacity(opacity+0.1);
      console.log(opacity);
    }
    const [showElement,setShowElement] = React.useState(true)
  useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)
         }, 100);
       },
   [])
   const something = () => {
    showElement?<Backdrop className={classes.backdrop} open>
    <CircularProgress color="inherit" />
  </Backdrop>:<></>
  opac();
   }

    return (
          <div className="grad1" style={{opacity}}>
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            {...generateRandomAvatarOptions() }
          />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div className="post__footer">

            <button onClick={opac}><AccountBalanceWalletIcon fontSize="medium" color="success" sx={{ fontSize: 40 }} /></button>
          {/* <AccountBalanceWalletIcon fontSize="medium" color="success" sx={{ fontSize: 40 }} /> */}
          </div>
        </div>
        </div>
      </div>
    );
  }
);

export default Post;
