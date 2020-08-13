import React, { Component } from 'react';
import './filme.css';

class Filme extends Component{
    constructor(props){
        super(props);
        this.state={
            filme:[]
        }
    }
    
    componentDidMount(){
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filme: json});
        })
    }

    render(){
        return (
            <div className="filme-info">
                <h1 className="titulo">{this.state.filme.nome}</h1>                
                <img src={this.state.filme.foto}/>
                {this.state.filme !== 0 && <h3 className="sinopseTitle">Sinópse</h3>}
                
                <div className="sinopse">{this.state.filme.sinopse}</div>
            </div>
        );
    }
}

export default Filme;