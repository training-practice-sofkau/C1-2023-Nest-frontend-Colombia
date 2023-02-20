export interface IgetTarea {
    id: number;
    dia: number,
    mes: number,
    anio: number,
    title: string;
    description: string;
    responsible: string;
    priority: string;
    isCompleted: boolean;
    state: boolean;
    uidUser: string;
}
