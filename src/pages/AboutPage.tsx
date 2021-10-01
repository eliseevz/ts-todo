import React from "react"
import { useHistory } from "react-router-dom"

export const AboutPage: React.FC = () => {

    const histroy = useHistory()

    return (
        <div className="container">
            <h1>Стрнаица информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci blanditiis dolorem doloribus eaque elige</p>
            <button onClick={() => {histroy.push("/")}} className="btn">Обратно к списку дел</button>
        </div>
    )

}