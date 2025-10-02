export class ProgressBar {
    constructor(container) {
        this.value = 0;
        this.element = container;
        this.element.style.width = "0%";
    }
    update(progress) {
        this.value = progress;
        this.element.style.width = `${progress}%`;
    }
}
