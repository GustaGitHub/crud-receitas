import './Card.css'
export default function Card({title, description}){
    return (
        <div id='card-revenue'>
            <label>TITULO DA RECEITA:</label>
            <input type="text" disabled value={title} /> <br/>
            
            <label>DESCRIÇÃO: </label>
            <textarea disabled value={description}></textarea> <br/>
            <button id='delete-revenue-btn'>EXCLUIR</button>
        </div>
    )
}