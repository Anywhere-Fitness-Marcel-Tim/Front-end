import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedOut } from "../actions";
import { connect } from 'react-redux'

const Logout = (props) => {
  const {LoggedIn} = props
    const push  = useNavigate();
    const dispatch = useDispatch()
    useEffect(()=>{ 
      if(LoggedIn){
      dispatch(loggedOut())
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      push('/')
      }
    })
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    LoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, loggedOut)(Logout)