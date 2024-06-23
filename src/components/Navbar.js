import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu mode="horizontal">
    <Menu.Item key="home">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="buying">
      <Link to="/buying">Buying</Link>
    </Menu.Item>
    <Menu.Item key="selling">
      <Link to="/selling">Selling</Link>
    </Menu.Item>
    <Menu.Item key="listings">
      <Link to="/listings">Listings</Link>
    </Menu.Item>
    <Menu.Item key="contact">
      <Link to="/contact">Contact Us</Link>
    </Menu.Item>
  </Menu>
);

export default Navbar;
