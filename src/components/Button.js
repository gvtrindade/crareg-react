import React from "react";

export class Button extends React.Component {
    render() {
        return <button>{this.props.text}</button>
    }
}