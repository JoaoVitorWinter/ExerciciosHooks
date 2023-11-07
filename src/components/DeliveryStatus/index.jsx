import { useState } from "react"
import Button from "../Button"

export default function DeliveryStatus() {
    const [status, setStatus] = useState("Pendente")
    return (

        <section className="flex flex-col gap-2 items-stretch w-[500px] m-auto mt-10">
            <h2 className="text-3xl text-center">Situação do pedido: {status}</h2>
            <Button onClick={() => {
                setStatus("Pendente");
            }} text={"Pendente"}/>
            <Button onClick={() => {
                setStatus("Em trânsito");
            }} text={"Em trânsito"}/>
            <Button onClick={() => {
                setStatus("Entregue");
            }} text={"Entregue"}/>
        </section>
    )
}