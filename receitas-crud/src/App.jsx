import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form.jsx";
import axios from "axios";
import Card from "./components/Card/Card.jsx";

export default function App(){
    const [listRevenues, setListRevenues] = useState([])

    useEffect(() => {
        const loadRevenues = () => {
            axios.get('http://localhost:8080/revenues')
            .then(({ data }) => setListRevenues(data))
            .catch((err) => console.error(err))
        }
        loadRevenues()
    }, [])

    return(
        <>
            <h2 id="title-page">Lista de Receitas</h2>
            <Form/>
            <hr/>
            {listRevenues.length > 0 ? listRevenues.map((el) => {
                return(
                    <Card description={el.description} title={el.title} key={el.id}/>
                )
            }) : (<h4>CARREGANDO</h4>)}
        </>
    )
}
