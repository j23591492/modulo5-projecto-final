import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="title">Instrumentos Musicais</h1>
      <div className="instrument-cards">
        <div className="card">
          <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/940/125/products/gl101-b29d35814d3fecfb7316401407255228-1024-1024.jpeg" alt="Piano" className="card-image" />
          <h2 className="card-title">Piano</h2>
          <p className="card-text">Encontre o piano ideal para suas necessidades. Desde de digitais para iniciantes até pianos de alta qualidade.</p>
          <a href="#" className="card-button">Saiba Mais</a>
        </div>
        <div className="card">
          <img src="https://lojamultilaser.vteximg.com.br/arquivos/ids/818087-1000-1000/br1532_00.jpg?v=638047381405530000" alt="Guitarra" className="card-image" />
          <h2 className="card-title">Guitarra</h2>
          <p className="card-text">Encontre a guitarra perfeita para você, desde modelos clássicos até modelos mais modernos.</p>
          <a href="#" className="card-button">Saiba Mais</a>
        </div>
        <div className="card">
          <img src="https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/89/1089818_bateria-acustica-premium-dx722-bumbo-22-com-banco-pratos-e-baquetas-ms_m13_637894957115718638.jpg" alt="Bateria" className="card-image" />
          <h2 className="card-title">Bateria</h2>
          <p className="card-text">Explore nossa seleção de baterias acústicas e eletrônicas para iniciantes e profissionais.</p>
          <a href="#" className="card-button">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
