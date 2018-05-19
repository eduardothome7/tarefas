import { DateTime } from "ionic-angular";

export class Task {
    id: number;
    title: string;
    category: any;
    status: any;
    start_at:DateTime;
    estimate_at: DateTime;
    closed_at:DateTime;
    description: string;
    estimate_min: number;
    priority: number;
    project: any[];
    team: number;
    playing: boolean;
    historics: any[];
    created_at: DateTime;
    updated_at:DateTime;
}