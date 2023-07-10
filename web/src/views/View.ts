import { Model, HasId } from "../models/Model"

export abstract class View<T extends Model<K>, K extends HasId>{
    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    abstract eventsMap(): { [key: string]: () => void};
    abstract template(): string;

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventsKey in eventsMap) {
            const [eventName, selector] = eventsKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventsKey]);
            });
        }
    }
    
    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}