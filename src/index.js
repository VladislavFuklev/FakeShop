import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
    <>
        <h1>hello world</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)
