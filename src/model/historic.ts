import { DateTime } from "ionic-angular";

export class Historic {
    
    private id: number;
    private title: string;
    private play: boolean;
    private created_at: DateTime;

    toString(): string{
        let state = (this.play) ? "pausada" : "iniciada";
        return `Tarefa ${state}`;
    }

}