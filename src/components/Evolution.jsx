import React from "react";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-header">
        <h2 className="evolution-title">Evolução da Programação</h2>
        <h4 className="evolution-subtitle">
          Você sabe como surgiu a programação?
        </h4>
      </div>
      <div className="timeline-item">
        <div className="year">1950</div>
        <div className="content">
          <h3>Primeiros Computadores</h3>
          <p>
            A década de 1950 viu o desenvolvimento dos primeiros computadores
            eletrônicos de grande escala, como o UNIVAC I e o ENIAC.
          </p>
        </div>
      </div>
      <div className="timeline-item2">
        <div className="year">1960</div>
        <div className="content">
          <h3>Revolução da Informática</h3>
          <p>
            Nos anos 60, surgiram linguagens de programação como COBOL e
            Fortran, impulsionando a revolução da informática.
          </p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="year">1970</div>
        <div className="content">
          <h3>Computadores Pessoais</h3>
          <p>
            Os anos 70 marcaram o início dos computadores pessoais, com o
            lançamento do Altair 8800.
          </p>
        </div>
      </div>
      {/* Adicione mais itens à timeline conforme necessário */}
    </div>
  );
}

export default Timeline;
