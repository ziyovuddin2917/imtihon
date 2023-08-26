class ShapeGenerator {
  private shapeSelect: HTMLSelectElement;
  private sizeInput: HTMLInputElement;
  private generateButton: HTMLButtonElement;
  private shapeContainer: HTMLDivElement;
  private errorMessage: HTMLDivElement;

  constructor() {
    this.shapeSelect = document.getElementById(
      "shape-select"
    ) as HTMLSelectElement;
    this.sizeInput = document.getElementById("size-input") as HTMLInputElement;
    this.generateButton = document.getElementById(
      "generate-button"
    ) as HTMLButtonElement;
    this.shapeContainer = document.getElementById(
      "shape-container"
    ) as HTMLDivElement;
    this.errorMessage = document.getElementById(
      "error-message"
    ) as HTMLDivElement;

    this.generateButton.addEventListener(
      "click",
      this.generateButtonClick.bind(this)
    );
    this.sizeInput.addEventListener(
      "keydown",
      this.sizeInputKeyDown.bind(this)
    );
  }

  private generateButtonClick() {
    const shape = this.shapeSelect.value;
    const size = parseInt(this.sizeInput.value);

    if (size < 1) {
      this.errorMessage.textContent = "only 1 , 8";
      this.shapeContainer.innerHTML = "";
    } else {
      this.errorMessage.textContent = "";
      this.generateShapes(shape, size);
    }
  }

  private sizeInputKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.generateButton.click();
    }
  }

  private generateShapes(shape: string, size: number) {
    this.shapeContainer.innerHTML = "";

    for (let i = 0; i < size; i++) {
      const box = document.createElement("div");
      box.classList.add("box");

      if (shape === "circle") {
        box.style.borderRadius = "50%";
      } else if (shape === "triangle") {
        box.style.background = "white";
        box.style.width = "0";
        box.style.height = "0";
        box.style.borderBottom = "100px solid red";
        box.style.borderLeft = "50px solid transparent";
        box.style.borderRight = "50px solid transparent";
      } else if (shape === "square") {
        box.style.borderRadius = "0";
      }

      this.shapeContainer.appendChild(box);
    }
  }
}

const shapeGenerator = new ShapeGenerator();
