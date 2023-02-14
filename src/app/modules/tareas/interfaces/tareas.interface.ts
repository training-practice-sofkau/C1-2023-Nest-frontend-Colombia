export interface IgetTarea {
    id?: number;
    title: string;
    description: string;
    responsible: string;
    priority: string;
    isCompleted: boolean;
    state: boolean;
    calendarModelId: number;
}
