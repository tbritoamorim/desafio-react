import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button, Row, Col, Switch } from 'antd';

import { MenuItem } from 'rc-menu';
import Tarefas from './components/Tarefas';
import Card from './components/Card';
import Funcionarios from './components/Funcionarios';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class Home extends Component {
    render() {
        return (    
                <div>
                <Content>
                <Row>
                    <Col span={24}><Tarefas></Tarefas></Col>
                </Row>
                <Row>
                    <Col span={12}>
                    <Card></Card>
                    </Col>
                    <Col span={12}>
                    <Funcionarios></Funcionarios>
                    
                    </Col>
                </Row>
                
                </Content>
                </div>
            );
    }
  
}

export default Home;