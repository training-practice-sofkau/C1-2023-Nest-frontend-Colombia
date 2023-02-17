/* eslint-disable prettier/prettier */

/**
 *@file This file defines the EditItemComponent class, which is responsible for editing
 *an item in the to-do list.
 *@version 1.0.0
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { TodoListI } from '../../interfaces/todo-list.interface';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

/**
 *The EditItemComponent class is responsible for editing an item in the to-do list.
 *@class
 */
@Component({
  selector: 'sofka-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  /**
   * The form used to edit the to-do list item
   * @type {FormGroup}
   */
  form: FormGroup;

  /**
   * The route to the parent component
   * @type {string[]}
   */
  routePrincipal: string[];

  /**
   * The todo list item being displayed
   * @type {TodoListI}
   */
  item: TodoListI;

  /**
   * The unique identifier of the todo list item being displayed
   * @type {string|null|undefined}
   */
  id: string | null | undefined;

  /**
   *Creates an instance of EditItemComponent.
   *@constructor
   *@param {FormBuilder} fb - The Angular form builder service
   *@param {Router} router - The Angular router service
   *@param {ActivatedRoute} activatedRoute - The Angular activated route service
   *@param {TodoListService} todoListService - The to-do list service
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoListService: TodoListService
  ) {
    this.routePrincipal = ['../../'];

    /**
     * The default value of the todo list item being displayed
     * @type {TodoListI}
     */
    this.item = {
      id: '',
      idUser: '',
      title: '',
      description: '',
      responsible: '',
      isCompleted: 0,
      state: 0,
    };

    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      responsible: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    });
  }

  /**
   *Sends the edited to-do list item to the to-do list service.
   *@returns {void}
   */
  sendItem(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoListService
      .editItemById(this.id, this.form.getRawValue())
      .subscribe({
        next: data => console.log(data),
        error: err => console.log(err),
        complete: () => console.log('complete'),
      });
  }

  /**
   *Initializes the component.
   *@returns {void}
   */
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoListService.getItemById(this.id).subscribe({
      next: data => {
        this.item = data;
        this.form.setValue({
          title: this.item.title,
          description: this.item.description,
          responsible: this.item.responsible,
        });
      },
      error: err => console.log(err),
      complete: () => console.log('complete'),
    });
  }

  /**
   * Returns to the parent component
   * @returns {void}
   */
  return(): void {
    this.router.navigate(['principal']);
  }
}
