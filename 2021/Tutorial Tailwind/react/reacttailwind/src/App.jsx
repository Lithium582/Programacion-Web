import React from "react";
import Card from "./components/Card";

const App = () => {
    return (
        <div className="container mx-auto mt-5">
            <h1>Tailwind</h1>
            <h2>CSS</h2>
            <button className="btn btn-blue btn-blue:hover">Botón</button>

            <div className="flex -mx-2 flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/3 px-2">
                    <Card photo="https://picsum.photos/800/600"></Card>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-2">
                    <Card photo="https://picsum.photos/800/600"></Card>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-2">
                    <Card photo="https://picsum.photos/800/600"></Card>
                </div>
            </div>
        </div>
    )
}

export default App