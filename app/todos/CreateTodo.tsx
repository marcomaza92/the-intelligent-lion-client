import styles from './styles.module.css';

const CreateTodo = () => {

    const createTodo = async (formData: FormData) => {
      'use server'
      const rawData = {
        task: formData.get('task'),
        is_complete: formData.get('is_complete') === 'on' ? true : false
      }
      console.log(rawData);
      const res = await fetch(`http://127.0.0.1:5000/create?task=${rawData.task}&is_complete=${rawData.is_complete}`, {
        method: 'POST',
      });
      console.log(res.json());
    }
  
    return (
      <div className={styles.formContainer}>
        <form className={styles.form} action={createTodo}>
          <label htmlFor="task">
            <span>Task</span>
            <input name="task" type="text" />
          </label>
          <label htmlFor="is_complete">
            <span>Is Completed?</span>
            <input name="is_complete" type="checkbox" />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }

  export default CreateTodo;