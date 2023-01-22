import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteTask, toggleCompleted } from 'redux/actions';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const taskId = task.id;

  const handleDelete = () => dispatch(deleteTask(taskId));
  const handleToggle = () => dispatch(toggleCompleted(taskId));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} onClick={handleDelete} />
      </button>
    </div>
  );
};
