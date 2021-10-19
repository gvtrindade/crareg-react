import React from "react";
import { Button } from "./Button";

export class FormCadastFuncionario extends React.Component{
    handleClick() {
        
    }

    render (){
        return <Button onClick={this.handleClick} text={'Cadastrar Funcionário'} />
    }
}