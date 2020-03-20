import React, {Component} from 'react';
import axios from 'axios'; //to do CRUD API call - MongoDB

class Router extends Component{
  state =[
    {
      productname :'Book',
      price : 12,
      user_id : '5e659d2728253e0c98997f5e'
    },
    {
      productname :'Laptop',
      price : 4500,
      user_id : '5e659d2728253e0c98997f5e'
    },
  ]

  componentDidMount(){    //means rendering
    this.getProduct();
    this.deleteProduct();
    this.addProduct();
  }

  getProduct = () =>{
    console.log('getProduct function is called');
    axios.get(`http://192.168.33.10:5000/ProductsFromDB`)
    .then(res =>{
      console.log(res.data);
    });
  }


  deleteProduct = () => {
    console.log('deleteProduct function is called');
    axios.delete(`http://192.168.33.10:5000/deleteProduct/5e66ee52b5d9950de6ae831b`)
    .then(res => {
      console.log('deleted');
    });
  }

  addProduct = () => {
    console.log('addProduct function is called');
    const post = {
      productname : this.state[0].productname,
      price : this.state[0].price,
      user_id : this.state[0].user_id

    }
    axios.post(`http://192.168.33.10:5000/newProduct`, post)
    .then(res => {
      console.log(res.data);
    });
  }

  render(){
    return(<h1> Get request to database </h1>)
  }

}


export default Router;
