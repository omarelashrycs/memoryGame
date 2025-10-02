export class ProgressBar {
  private element: HTMLDivElement;
  private value: number = 0;

  constructor(container: HTMLElement) {
    this.element = container as HTMLDivElement;
    this.element.style.width = "0%";
  }

  update(progress: number) {
    this.value = progress;
    this.element.style.width = `${progress}%`;
  }
}
