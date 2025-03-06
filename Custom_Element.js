class OscarCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          .custom-card {
            border: 2px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            text-align: center;
            width: 200px;
            background: white;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
            font-family: Arial, sans-serif;
          }
          .custom-card h2 {
            font-size: 18px;
            margin: 10px 0;
          }
          .custom-card p {
            font-size: 16px;
            color: #333;
          }
        </style>
        <div class="custom-card">
          <h2>Premiación Especial</h2>
          <p>¡Un premio sorpresa para la mejor innovación!</p>
        </div>
      `;
    }
  }
  
  // Registrar el Custom Element
  customElements.define("oscar-card", OscarCard);
  