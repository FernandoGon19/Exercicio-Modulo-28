import { useState } from "react";
import styles from './index.module.css'

const Calculadora = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    const RenderizaCalculo = () => {
        const imc = peso / (altura * altura)
        const imcCorrigido = imc * 10000
        if (imcCorrigido < 16.9) {
            return (
                <p>Muito abaixo do peso | seu IMC: {imcCorrigido.toFixed(2)}</p>
            )
        } else if (imcCorrigido > 17 && imcCorrigido < 18.4){
            return (
                <p> Abaixo do Peso | seu IMC: {imcCorrigido.toFixed(2)}</p>
            )
        } else if (imcCorrigido > 18.5 && imcCorrigido < 24.9) {
            return(
                <p>Normal | seu IMC: {imcCorrigido.toFixed(2)}</p>
            )
        } else if (imcCorrigido > 25 && imcCorrigido < 29.9) {
            return (
                <p>Acima do Peso | seu IMC: {imcCorrigido.toFixed(2)}</p>
            )
        } else if (imcCorrigido > 30 && imcCorrigido < 34.9) {
            return (
                <p>Obesidade grau I | seu IMC: {imcCorrigido.toFixed(2)}</p>
            )
        } else if (imcCorrigido > 35 && imcCorrigido < 40) {
            return (
                <p>Obesidade grau II | seu IMC: {imcCorrigido.toFixed(2)}</p>
            )
        } else if (imcCorrigido > 40) {
            return (
                <p>Obesidade grau III | seu IMC: {imcCorrigido.toFixed(2)}</p>
            )
        } else {
            return (
                <p>Informe seus dados</p>
            )
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.display} action="">
                <h1>Calculadora IMC</h1>
                <input type="number" placeholder="Altura, em cm (ex: 170)" onChange={evento => setAltura(parseInt(evento.target.value))} />
                <input type="number" placeholder="Seu peso em kg (ex: 80)" onChange={evento => setPeso(parseInt(evento.target.value))}/>
                <div>{RenderizaCalculo()}</div>
            </form>
        </div>
        
    )

}

export default Calculadora