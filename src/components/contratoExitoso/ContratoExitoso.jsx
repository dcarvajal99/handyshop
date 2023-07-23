import React from "react";
import { Card } from "flowbite-react";

const ContratoExitoso = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        {/*<div className="flex items-center justify-center h-screen" >{/*className="w-full h-screen flex items-center justify-center w-32 h-32 bg-gray-300 "*/}
            {/*<div className="p-5 border border-solid border-gray-500" >{/*className="p-5 border border-solid border-gray-500"*/}
                {/*<h1>contrato firmado con exito</h1>
                    <ul>
                        <li>numero de contrato: 999</li>
                        <li>numero de boleta: 999</li>
                    </ul>
                    <h3>le enviaremos un correo con los siguentes datos</h3>
                    <ul>
                        <li>nombre del profesional</li>
                        <li>telefono</li>

                    </ul>
                </div>
            </div>*/}
            <Card className=" flex items-center justify-center" href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>Contrato con exito 😊</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>Enviamos un correo con los datos del profesional</p>
                    <p>Gracias por preferirnos 👍</p>
                </p>
            </Card>
        </div>
    )
}

export default ContratoExitoso;