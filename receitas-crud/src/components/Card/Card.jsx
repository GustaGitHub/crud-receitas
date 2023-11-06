import { useDeleteRevenue } from '../../hooks/useDeleteRevenue'
import './Card.css'
export default function Card({title, description, id}){
    return (
        <div id='card-revenue'>
            <label>TITULO DA RECEITA:</label>
            <input type="text" disabled value={title} /> <br/>
            
            <label>DESCRIÇÃO: </label>
            <textarea disabled value={description}></textarea> <br/>
            <button id='delete-revenue-btn' onClick={() => useDeleteRevenue(id)}>EXCLUIR</button>
        </div>
    )
}