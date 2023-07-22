import { useState } from 'react';
import { useNewRevenue } from '../../hooks/useNewRevenue'
import './Form.css'

export default function Form(){

    const [newTitleRevenue, setNewTitleRevenue] = useState("");
    const [newDescriptionRevenue, setNewDescriptionRevenue] = useState("");

    return(
        <div id='container-form'>
            <div className='form-group'>
                <label>Titulo da Receita:</label> <br/>
                <input type="text" onChange={(e) => setNewTitleRevenue(e.target.value)}  placeholder="Ex: Bolo de Chocolate" className='inputs'/>
            </div>
            <div className='form-group'>
                <label>Descrição da Receita:</label> <br/>
                <textarea maxLength={4000} onChange={(e) => setNewDescriptionRevenue(e.target.value)} className='inputs'></textarea>
            </div>
            <button id='btn-new-revenue' onClick={() => useNewRevenue(newTitleRevenue, newDescriptionRevenue)}>Cadastrar nova Receita</button>
        </div>
        
    )
}