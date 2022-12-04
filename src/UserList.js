import React, { useEffect, useState } from 'react';
import { ButtonGroup, Table, Button } from 'reactstrap';
import { Container, Paper,  AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {

  const paperStyle={padding: '50px 20px', width:600,margin:"20px auto"}
    const [userInfo, setUserInfo] = React.useState([]);
    const [config, setConfig] = React.useState([]);

  const remove = async (id) => {
    await fetch(`http://localhost:8080/customer/deleteUser/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedUserInfo = [...userInfo].filter(i => i.id !== id);
      setUserInfo(updatedUserInfo);
    });
  }

  const confDeleteClick = async (id) => {
    await fetch(`http://localhost:8080/customer/deleteConfig/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedConf = [...config].filter(i => i.id !== id);
      setConfig(updatedConf);
    });
  }

const loadUser = async (id) => {
  const result = await axios.get(`http://localhost:8080/customer/findConf/${id}`);
  setConfig(result.data);
};

const getConf = async(id)=>{
  fetch(`http://localhost:8080/customer/findConf/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(() => {
    let updatedUserInfo = [...config].filter(i => i.id == id);
    setConfig(updatedUserInfo);
  });
}

  React.useEffect(()=>{
    fetch("http://localhost:8080/customer/findUser")
    .then(res=>res.json())
    .then((result)=>{
        setUserInfo(result);
    }
  )
  },[])

  return (
    <div>
        <Container fluid>
        <h2 className="text-center">Customer List</h2>
        <Table className="mt-4">
        <thead>
                                <tr>
                                    <th> Customer First Name</th>
                                    <th> Customer Last Name</th>
                                    <th> Customer Company</th>
                                    <th> Customer Email</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   userInfo.map(
                                    userInfo => 
                                        <tr key = {userInfo.id}>
                                             <td> { userInfo.name} </td>   
                                             <td> {userInfo.surname}</td>
                                             <td> {userInfo.company}</td>
                                             <td> {userInfo.email}</td>
                                             <td>
                                            
                                             <button style={{marginLeft: "10px"}} onClick={()=>{remove(userInfo.id)}} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={()=>{loadUser(userInfo.id)}} className="btn btn-primary">Detail </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
        </Table>
        <h1>Confs:</h1>
        <Paper elevation={3} style={paperStyle}>
      {config.map(configur=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={configur.id}>
          Id:{configur.id}<br/>
          Title:{configur.title}<br/>
          CPU:{configur.cpu}<br/>
          GPU:{configur.gpu}<br/>
          RAM:{configur.ram}<br/>
          STORAGE:{configur.storage}<br/>
          Motherboard:{configur.motherboard}<br/>
          Cooler:{configur.cooler}<br/>
          Box:{configur.box}<br/>
          <Button color="secondary" onClick={()=>{confDeleteClick(configur.id)}}>Delete</Button>
          </Paper>
        ))
      }
    </Paper>

        </Container>
    </div>
  ); 
};

export default UserList;