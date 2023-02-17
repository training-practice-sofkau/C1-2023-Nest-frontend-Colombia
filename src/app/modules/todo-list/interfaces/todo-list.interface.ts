/* eslint-disable prettier/prettier */
/**
 * Interfaz para una tarea de la lista de tareas.
 * @interface
 */
export interface TodoListI {
  //success: boolean;
  /**
   * Identificador de la tarea.
   * @type {string}
   */
  id: string;
  /**
   * Identificador del usuario al que pertenece la tarea.
   * @type {string}
   */
  idUser: string;
  /**
   * Título de la tarea.
   * @type {string}
   */
  title: string;
  /**
   * Descripción de la tarea.
   * @type {string}
   * @default ''
   */
  description: string;
  /**
   * Responsable de la tarea.
   * @type {string}
   * @default ''
   * @example 'Juan Pérez'
   */
  responsible: string;
  /**
   * Indica si la tarea está completada.
   * @type {number}
   * @default 0
   */
  isCompleted: number;

  /**
   * Indica si la tarea está activa.
   * @type {number}
   * @default 0
   */
  state: number;
}
