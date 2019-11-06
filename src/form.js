import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button, Row, Col, Switch } from 'antd';
import AdicionarFuncionario from './components/AdicionarFuncionario';
import Tarefas from './components/Tarefas';
import Card from './components/Card';
import Funcionarios from './components/Funcionarios';

const { Header, Content, Footer, Sider } = Layout;

class Form extends Component {
  render() {
    return (
        <form>
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
                    <AdicionarFuncionario></AdicionarFuncionario>
                    
                    </Col>
                </Row>
                
                </Content>
            </div>
        </form>
    );
  }
}

export default Form;