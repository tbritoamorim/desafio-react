import React, { Component, useState } from 'react';
import { Switch, Button, Form, Icon, Radio, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import './AdicionarFuncionario.css';
import './Funcionarios.jsx';

class AdicionarFuncionario extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ativo: '',
            nome: '',
            cpf: '',
            sexo: 'feminino',
            dataNascimento: '',
            rg: '',
            cargo: '',
            epi: '',
            atividade: '',
            epiNome: '',
            ca: ''
        }
        this.fileInput = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value,
        });
    }

    onChange = e => {
        this.setState({
            sexo: e.target.value,
        });
    }

    onChangeDate = e => {
        this.setState({
            dataNascimento: e.target.value,
        });
        console.log(this.state.dataNascimento);
    }

    handleSubmit = e => {
        e.preventDefault();
        alert(`Você cadastrou ${this.state.nome}`);
        global.data.push({
            nome: this.state.nome, 
            cpf: this.state.cpf,
            sexo: this.state.sexo,
            ativo: this.state.ativo,
            data_nascimento: this.state.dataNascimento,
            rg: this.state.rg,
            cargo: this.state.cargo,
            epi: this.state.epi,
            atividade: this.state.atividade,
            epi_nome: this.state.epiNome,
            ca: this.state.ca,
        });
        console.log(global.data);
    }

    render() {
        return (
            <div className="form">
                <div className="titulo">
                <a><Link to={'/'}><Icon type="arrow-left" style={{color: 'white', fontSize: '20px'}} /></Link></a>
                <h1 style={{display: 'inline', color: 'white', marginLeft: '10px'}}>Adicionar Funcionário</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="ativo">
                        <p style={{display: 'inline', marginRight: '430px'}}>O trabalhador está ativo?</p>
                        <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" defaultChecked/>
                    </div>
                    <div className="infoPessoais">
                        <Row>
                            <Col span={12}>
                                <label htmlFor="nome" style={{display: 'block'}}>Nome</label>
                                <input type="text" name="nome" value={this.state.nome} onChange={this.handleInputChange} />
                            </Col>
                            <Col span={12}>
                                <label style={{display: 'block'}}>Sexo</label>
                                <Radio.Group onChange={this.onChange} value={this.state.value}>
                                    <Radio value="masculino" defaultChecked>Masculino</Radio>
                                    <Radio value="feminino">Feminino</Radio>
                                </Radio.Group>  
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <label htmlFor="cpf" style={{display: 'block'}}>CPF</label>
                                <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleInputChange} />
                            </Col>
                            <Col span={12}>
                                <label htmlFor="data_nascimento" style={{display: 'block'}}>Data de Nascimento</label>
                                <input type="date" name="data_nascimento" value={this.state.dataNascimento} onChange={this.onChangeDate} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <label htmlFor="rg" style={{display: 'block'}}>RG</label>
                                <input type="text" name="rg" value={this.state.rg} onChange={this.handleInputChange} />
                            </Col>
                            <Col span={12}>
                                <label htmlFor="cargo" style={{display: 'block'}}>Cargo</label>
                                <input type="text" name="cargo" value={this.state.cargo} onChange={this.handleInputChange} />
                            </Col>
                        </Row>
                    </div>
                    <div className="epis">
                        <p>Quais EPIs o trabalhador usa na atividade?</p>
                        <input type="checkbox" name="epi" checked={this.state.epi === true} onChange={this.handleInputChange} /> O trabalhador não usa EPI.
                        <div className="atividade">
                            <Row>
                                <Col span={24}>
                                    <label style={{display: 'block'}}>Selecione a atividade:</label>
                                    <select value={this.state.atividade} style={{width: '100%'}}>
                                        <option value="Ativid. 1">Ativid. 1</option>
                                        <option value="Ativid. 2">Ativid. 2</option>
                                        <option value="Ativid. 3">Ativid. 3</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <label style={{display: 'block'}}>Selecione o EPI:</label>
                                    <select value={this.state.epiNome} style={{width: '90%'}}>
                                        <option value="capacete">Capacete</option>
                                        <option value="protetor auricular">Protetor auricular</option>
                                        <option value="calçado de  segurança">Calçado de segurança</option>
                                    </select>
                                </Col>
                                <Col span={12}>
                                    <label htmlFor="ca" style={{display: 'block'}}>Informe o número do CA:</label>
                                    <input type="text" name="ca" value={this.state.ca} onChange={this.handleInputChange} style={{width: '90%'}} />
                                </Col>
                            </Row>  
                        </div>
                        <Button type="default" block disabled>Adicionar outra atividade</Button>
                    </div>
                    <div className="atestado">
                        <p>Adicione Atestado de Saúde Ocupacional (opcional):</p>
                        <input type="file" ref={this.fileInput} />
                    </div>
                    <div>
                        <button type="submit" className="submit">Salvar</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default AdicionarFuncionario;