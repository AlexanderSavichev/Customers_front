import axios from 'axios';
import React, { useState } from "react";
import { Container, Paper,  AppBar } from '@mui/material';

export default function AddUser(){
    const paperStyle={padding: '50px 20px', width:600,margin:"20px auto"}
    const [userInfo, setUserInfo] = React.useState([]);
    const onInputChange = (event) => {
        const { name, value } = event.target
        setUserInfo({ ...userInfo, [name]: value })
      }
      const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8080/customer/add",userInfo);
        alert('Data Inserted');
        // history.push("/");
      };

      return (
        <div className="container bg-light">
          <div class="row">  
           <div className="col-sm-4 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add new user</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter name"
                  name="name"
                  value={userInfo.name}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter surname"
                  name="surname"
                  value={userInfo.surname}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Company name"
                  name="company"
                  value={userInfo.company}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Email address"
                  name="email"
                  value={userInfo.email}
                  onChange={e => onInputChange(e)}
                />
              </div>


         <div>    {userInfo.map(user => {
    <div key={user.id}>
     
      {user.configurations.map(config=>(
        <div key={config.id}>
           <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter title config"
                  name="title"
                  value={config.title}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter CPU"
                  name="cpu"
                  value={config.cpu}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter GPU"
                  name="gpu"
                  value={config.gpu}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter RAM"
                  name="ram"
                  value={config.ram}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter storage"
                  name="storage"
                  value={config.storage}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter motherboard"
                  name="motherboard"
                  value={config.motherboard}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter cooler"
                  name="cooler"
                  value={config.cooler}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter box"
                  name="box"
                  value={config.box}
                  onChange={e => onInputChange(e)}
                />
              </div>
          </div>
        ))
      }
    </div>
  })}
</div> 

              <button className="btn btn-primary btn-block">Add Product</button>
            </form>
          </div>
        </div>
      </div>  
      );


}
