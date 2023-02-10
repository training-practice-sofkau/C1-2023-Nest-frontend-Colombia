import { Tarea } from "../interfaces/tareas.interface";

export const TAREAS: Tarea[] = [
    { 
        id: 1,
        title: 'Clase',
        description: 'clase de .NET',
        responsible: 'Juan Jaramillo',
        priority: 'Alta',
        isCompleted: true,
        state: true,
        calendarModelId: 1
    },
    {
        id: 2,
        title: 'Dormir',
        description: 'Dormir 8 horas',
        responsible: 'Juan Jaramillo',
        priority: 'Media',
        isCompleted: false,
        state: true,
        calendarModelId: 2
    },
    {
        id: 3,
        title: 'Cena',
        description: 'Cena familiar a las 9 pm',
        responsible: 'Juan Jaramillo',
        priority: 'Alta',
        isCompleted: false,
        state: true,
        calendarModelId: 3
    },
    {
        id: 4,
        title: 'Deporte',
        description: 'Salir a trotar',
        responsible: 'Juan Jaramillo',
        priority: 'Baja',
        isCompleted: false,
        state: true,
        calendarModelId: 4
    },
    {
        id: 5,
        title: 'Estudiar',
        description: 'Repasar temas de Angular',
        responsible: 'Juan Jaramillo',
        priority: 'Alta',
        isCompleted: false,
        state: true,
        calendarModelId: 4
    }
  ];