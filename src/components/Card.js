import React from 'react'

function Card() {
  return (
    <div className="card">
      <div className="container-1">
        <img className="img-2" src="/img111.png" alt="not available" />
        <button className="category">Folk</button>
        <div className="title">Benny Dayal</div>

        <div className="infos">
          <p className="info">More Info <img src="/arrowright1.png" alt="" /></p>
          <img src="/Ticket.png" alt="" />
        </div>
      </div>

      <div className="container-1">
        <img className="img-2" src="/img112.png" alt="not available" />
        <button className="category">Bollywood</button>
        <div className="title">Vijay Yesudas</div>

        <div className="infos">
          <p className="info">More Info  <img src="/arrowright1.png" ></img></p>
          <img src="/Ticket.png" alt="" />
        </div>
      </div>

      <div className="container-1">
        <img className="img-2" src="/img113.png" alt="not available" />
        <button className="category">Folk</button>
        <div className="title">Andread Jeremiah</div>

        <div className="infos">
          <p className="info">  More Info  <img src="/arrowright1.png"></img></p>
          <img src="/Ticket.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card