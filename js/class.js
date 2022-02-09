class Guitar {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.play = () => console.log("guitar");
  }
}

class Electric extends Guitar {
  constructor(props) {
    super(props);
    this.play = () => console.log("Electric");
  }
}

const guitar = new Guitar("n", "type");
const electric = new Electric("n", "type");

guitar.play();
electric.play();
