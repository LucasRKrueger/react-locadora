import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            filmes: []
        }
        this.loadFilmes = this.loadFilmes.bind(this);
    }
    
    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes(){        
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/'
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filmes : json});
        })
    }

    render(){
        return (
            <div className="container">
                <div className="lista-filmes">
                    {this.state.filmes.map((filme) =>{
                        return (
                            <article key={filme.id}>
                                <strong className="descricao">{filme.nome}</strong>
                                <Link to={`/filme/${filme.id}`}><img src={filme.foto} alt="Capa"/></Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home;