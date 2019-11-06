import React from 'react';
import { Button, List } from 'antd';
import { Link } from 'react-router-dom';
import './Funcionarios.css'


global.data = [
    {"nome": "Daniel Alves da Silva", "cpf": "000.000.000-01", "sexo": "masculino", "ativo": true, "data_nascimento": "11/02/1987", "rg": "1234467", "cargo": "Cargo 1", "epi": false, "atividade": "Ativi. 1", "epi_nome": "calçado de segurança", "ca": "001"},
    {"nome": "Giselle Torres ", "cpf": "000.000.000-02", "sexo": "feminino", "ativo": true, "data_nascimento": "11/02/1987", "rg": "1234468", "cargo": "Cargo 2", "epi": false, "atividade": "Ativi. 1", "epi_nome": "calçado de segurança", "ca": "001" }
]

export default () =>
<div className="funcionarios">
    <h1 style={{ backgroundColor: '#4EA0BE', padding: '10px', paddingLeft: '25px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', color: 'white' }}>Funcionário(s)</h1>
    <Button  size="large" type="default" style={{ display: 'block', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', marginTop: '25px', color: '#4EA0BE'}}><Link to={'/form'}>+ Adicionar Funcionário</Link></Button>
    <Button type="default" style={{color: '#4EA0BE', marginLeft: '30px', marginRight: '20px'}}>Ver apenas ativos</Button>
    <Button type="default" style={{color: '#4EA0BE'}}>Limpar filtros</Button>
    <List
        itemLayout="horizontal"
        dataSource={global.data}
        renderItem={item => (
            <List.Item className="nomeLista">
                <List.Item.Meta                
                    title={<h3>{item.nome}</h3>}
                />
                <p className="filtros">{item.cpf}</p>
                <p className="filtros">{item.atividade}</p>
                <p className="filtros">{item.cargo}</p>
                <a style={{color: 'white'}}><p className="opcoes">...</p></a>
            </List.Item>
        )}
    />
</div>