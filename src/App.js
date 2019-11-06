import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Button, Row, Col } from 'antd';
import Home from './home.js';
import Form from './form.js';
import './App.css';

import { MenuItem } from 'rc-menu';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  render() {
    return (
      <Router>
      <Layout >
                <Sider width='70'>
                <Menu defaultSelectedKeys={['2']} mode="inline" style={{backgroundColor: '#4EA0BE', height: '100vh', marginTop: '150px'}}>
                    <Menu.Item>
                        <Icon type="home" className="menuIcons"/>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="edit" className="menuIcons"/>
                    </Menu.Item>
                    <MenuItem>
                        <Icon type="apartment" className="menuIcons"/>
                    </MenuItem>
                    <MenuItem>
                        <Icon type="bell" className="menuIcons"/>
                    </MenuItem>
                    <MenuItem>
                        <Icon type="history" className="menuIcons"/>
                    </MenuItem>
                    <MenuItem>
                        <Icon type="user" className="menuIcons" />
                    </MenuItem>
                </Menu>
                </Sider>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/form' component={Form} />
                </Switch> 
        </Layout> 
        </Router>  
    );
  }
}
export default App;
