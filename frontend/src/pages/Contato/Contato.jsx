import React from "react";
import "./Contato.css";

const Contato = () => {
  return (
    <div>
      <h1 className="title">Membros do Grupo</h1>
      <div className="instrument-cards">
        <div className="card">
          <img src="https://avatars.githubusercontent.com/u/116355056?v=4" alt="Piano" className="card-image" />
          <h2 className="card-title">Lucas Bento</h2>
          <p className="card-text">Email: lucasbenmendonca@gmail.com</p>
          <a href="https://github.com/LuckBM" className="card-button">Github</a>
        </div>

        <div className="card">
          <img src="https://avatars.githubusercontent.com/u/115815559?v=4" alt="Bateria" className="card-image" />
          <h2 className="card-title">Emerson</h2>
          <p className="card-text">Email: emersonrolemberg17@gmail.com</p>
          <a href="https://github.com/EmersonRolemberg" className="card-button">Github</a>
        </div>

        <div className="card">
          <img src="https://avatars.githubusercontent.com/u/116725523?v=4" alt="Bateria" className="card-image" />
          <h2 className="card-title">Thalyta</h2>
          <p className="card-text">Email: Thalyta.rio@gmail.com</p>
          <a href="https://github.com/tatahcunha" className="card-button">Github</a>
        </div>

        <div className="card">
          <img src="https://avatars.githubusercontent.com/u/116725639?v=4" alt="" className="card-image" />
          <h2 className="card-title">Alessandro</h2>
          <p className="card-text">Email: alessandro.santossd@gmail.com</p>
          <a href="https://github.com/alessandrosdias" className="card-button">Github</a>
        </div>

        <div className="card">
          <img src="https://avatars.githubusercontent.com/u/115737038?v=4" alt="Bateria" className="card-image" />
          <h2 className="card-title">Maria Helloá</h2>
          <p className="card-text">Email: helloalimaavelino@gmail.com</p>
          <a href="https://github.com/MariaHelloa" className="card-button">Github</a>
        </div>

      

        <div className="card">
          <img src="https://avatars.githubusercontent.com/u/117184775?v=4" alt="Bateria" className="card-image" />
          <h2 className="card-title">Jhoselith</h2>
          <p className="card-text">Email: miobashanele@gmail.com</p>
          <a href="https://github.com/j23591492" className="card-button">Github</a>
        </div>

      </div>
    </div>
  );
};

export default Contato;
