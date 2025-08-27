import axios from "axios";
import {useState, useEffect} from 'react'

const ViaCep = () => {
    
    let cep = "";
    let logradouro = "";
    let bairro = "";

    const handleBuscarCep = () => {
        cep = document.querySelector('.cep').value;
        if(cep.length == 8){
            buscarCep();
        }
    }

    const buscarCep = () => {
        axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((response) => {
            var endereco = response.data;
            alert(JSON.stringify(endereco));
            logradouro = endereco.logradouro;
            bairro = endereco.bairro;
            alert(logradouro);
            document.getElementById("logradouro").value = logradouro;
            document.getElementById("bairro").value = bairro;
        })
    }

    return (
        <div className="ViaCep">
            <h1>ViaCep</h1>
            <input type="text" 
                className="cep"
                placeholder="00000-000" />
            <button onClick={handleBuscarCep}>
                Buscar
            </button>
            <div className="Endereco">
                <input className="logradouro"
                    type="text" 
                    placeholder="logradouro"
                    id="logradouro"
                    name="logradouro"
                    value={logradouro}
                />
                <input className="bairro"
                    type="text" 
                    placeholder="bairro"
                    id="bairro"
                    name="bairro"
                    value={bairro}
                />
            </div>
        </div>
    )
}

export default ViaCep