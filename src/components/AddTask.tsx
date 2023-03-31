import React from 'react';

import { Task } from '../interfaces';

import { TaskContext } from '../context/task';

const AddTask = () => {
  const { addTask } = React.useContext(TaskContext);

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [dueDate, setDueDate] = React.useState(new Date());

  const onTaskAdd = () => {
    const task = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
      dueDate,
      status: 'todo',
    } as Task;

    addTask(task);
    setTitle('');
    setDescription('');
    setDueDate(new Date());
  };

  return (
    <form
      className='flex flex-col w-full'
      onSubmit={(e) => {
        onTaskAdd();
        e.preventDefault();
      }}
    >
      <input
        type='text'
        placeholder='Title'
        className='mt-4 border border-gray-300 rounded-sm'
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Description'
        className='mt-4 border border-gray-300 rounded-sm'
        value={description}
        required
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='date'
        className='mt-4 border border-gray-300 rounded-sm'
        value={
          new Date(dueDate).toISOString().split('T')[0] ||
          new Date().toISOString().split('T')[0]
        }
        onChange={(e) => setDueDate(new Date(e.target.value))}
        required
      />
      <button className='mt-4 text-white rounded-sm btn-primary' type='submit'>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
