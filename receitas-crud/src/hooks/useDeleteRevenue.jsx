import axios from 'axios';

export const useDeleteRevenue = (idRevenue) => {
    axios.delete('http://localhost:8080/revenue/', {  
        data: {id: idRevenue }
    })
    .then(() => window.location.reload())
    .catch((err) => {
        alert('Falha ao excluir Receita')
        console.log(err)
    })
}