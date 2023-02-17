/* eslint-disable prettier/prettier */
/**
 * A class representing a Todo List Model.
 */
export class todoListModel {
  /**
   * The title of the Todo List item.
   * @type {string}
   */
  title: string;

  /**
   * The description of the Todo List item.
   * @type {string}
   */
  description: string;

  /**
   * The responsible party for the Todo List item.
   * @type {string}
   */
  responsible: string;

  /**
   * Creates an instance of todoListModel.
   * @param {string} title - The title of the Todo List item.
   * @param {string} description - The description of the Todo List item.
   * @param {string} responsible - The responsible party for the Todo List item.
   */
  constructor(title: string, description: string, responsible: string) {
    this.title = title;
    this.description = description;
    this.responsible = responsible;
  }

  /**
   * Get the Todo List item's data.
   * @returns {{title: string, description: string, responsible: string}} - The Todo List item's data.
   */
  getData(): { title: string; description: string; responsible: string } {
    return {
      title: this.title,
      description: this.description,
      responsible: this.responsible,
    };
  }
}
