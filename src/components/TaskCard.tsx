import { TaskCardProps } from '../interfaces';

const TaskCard = ({
  task,
  onTaskDelete,
  onTaskStatusChange,
}: TaskCardProps) => {
  return (
    <div className='task-card'>
      <div className='task-card-content'>
        <ul className='divide-y task-card-divider'>
          <li>
            <div className='task-card-block'>
              <div>
                <div className='flex justify-between'>
                  <div>
                    <p className='task-card-title'>{task?.title}</p>
                    <p className='task-card-description'>{task?.description}</p>
                  </div>
                  <div className='task-card-actions'>
                    <div>
                      <div>
                        <button
                          className='task-card-button task-card-delete-button'
                          onClick={() => {
                            onTaskDelete?.(task.id);
                          }}
                        >
                          Delete
                        </button>
                        <p
                          className={`task-card-status task-card-status-${
                            task.status === 'todo' ? 'todo' : 'done'
                          }`}
                        >
                          {task?.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <p className='task-card-date'>
                      {new Date(task?.dueDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  {task.status === 'todo' && (
                    <button
                      className='task-card-button task-card-change-status-button'
                      onClick={() => {
                        onTaskStatusChange?.(task.id, 'done');
                      }}
                    >
                      Change Status to done
                    </button>
                  )}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskCard;
