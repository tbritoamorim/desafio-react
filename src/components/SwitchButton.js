import React from 'react';
import Tarefas from './Tarefas';
import { Switch } from 'antd';

export default (props) =>
    <Switch
        onChange={() => props.finalizarTarefa() }
    >
    </Switch>
