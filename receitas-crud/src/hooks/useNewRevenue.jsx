import axios from 'axios'

export const useNewRevenue = (title, description) => {
    axios.post("http://localhost:8080/revenue", {
        title,
        description
    })
    .then(() => window.location.reload())
    .catch(() => alert('Falha ao Adicionar Receita, tente novamente'))
}

