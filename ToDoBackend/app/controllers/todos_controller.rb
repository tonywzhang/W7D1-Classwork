class TodosController < ApplicationController

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.all
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
    render json: Todo.find(params[:id])
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end

  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy

    @todo = Todo.find(params[:id])
    @todo.destroy

  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end

end
