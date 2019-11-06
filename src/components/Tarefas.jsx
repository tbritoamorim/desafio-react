import React, { Component } from 'react'
import { Steps, Icon, Switch } from 'antd';
import './Tarefas.css';


const { Step } = Steps;

export default class Tarefas extends Component {

    state = {
        title1: "Em progresso",
        description1: "Item 1",
        status1: "process",
        title2: "Aguardando",
        description2: "Item 2",
        status2: "wait"
    }
    
    toggle = () => {
        if(this.state.description1 == "Item 1") {
            this.finalizarTarefa();
        } else {
            this.desfazerTarefa();
        }
    }

    finalizarTarefa = () => {
        this.setState({ description1: this.state.description1 + " concluído", status1: "finish", title1: "Finalizado" });
        this.setState({ title2: "Em progresso", status2: "process"});
    }

    desfazerTarefa = () => {
        this.setState({ description1: "Item 1", status1: "process", title1: "Em progresso" });
        this.setState({ title2: "Aguardando", status2: "wait" });
    }

    render() {
        return (
            <div className="tarefas">
                <Steps size="small">
                <Step title={this.state.title1} description={this.state.description1} status={this.state.status1} />
                <Step title={this.state.title2} description={this.state.description2} status={this.state.status2} />
                <Step title="Aguardando" description="Item 3" status="wait" />
                <Step title="Aguardando" description="Item 4" status="wait" />
                <Step title="Aguardando" description="Item 5" status="wait" />
                </Steps>
                <Switch checkedChildren="Sim" unCheckedChildren="Não" className="botaoTarefaConcluida" onClick={this.toggle}></Switch>
                <p className="botaoTarefaConcluida">A etapa está concluída?</p>
            </div>
                
        )
    }
}
