import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <Header />
      <AppList />
    </>
  );
}
function Header() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}
function AppList() {
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
