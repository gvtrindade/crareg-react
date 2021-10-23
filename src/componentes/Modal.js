import { useState } from "react";

export default function Modal(estadoModal) {
    const [mostrandoModal, setMostrandoModal] = useState(false);

    const toggleModal = () => {
        setMostrandoModal(estadoModal => !estadoModal)
    }

    return(
        <form>
            <h3>Cadastro de Funcionário</h3>
        </form>
    )   
}