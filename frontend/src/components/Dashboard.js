import React, {useState, useEffect, useContext} from 'react';

import axios from 'axios';
import backendURL from './../config';
import { LoginContext } from '../contexts/LoginContext';
import LandingPage from './LandingPage';
import Login from './Login/Login';
import ShoppingPageOverview from './ShoppingPageOverview';
import { ShoppingPageOverviewContext } from '../contexts/ShoppingPageOverviewContext';

const Dashboard = () => {

  const [items, setItems] = useState([])
  const {user} = useContext(LoginContext)
	

  const getAllItems = () => {
	axios.get(`${backendURL}/getitems`).then((res) => {
		if (res.status==200){
			const allItems = res.data.result
			setItems(allItems)
		} else {
			console.log("items not recieved");
		}
	}).catch((err) => console.log(err));
  }
  useEffect(()=>{
	getAllItems()
  },[])


  return (
	<>
		{user.length!=0 ? <LandingPage items={items}/> : <Login/>}
	</>
  );
}

export default Dashboard;