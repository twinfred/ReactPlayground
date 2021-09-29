import { useForm } from 'react-hook-form';

interface IFormData {
  name: string,
  favoriteNumber: number
}

function ReactHookFormContainer() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: IFormData) => {
    alert(JSON.stringify(data));
  }

  return (
    <section>
      <h2>4. Using react-hook-form to register form data</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" style={{ marginRight: '4px' }}>Name:</label>
        <input id="name" type="text" {...register("name")} style={{ marginRight: '4px' }} />
        <label htmlFor="favoriteNumber" style={{ marginRight: '4px' }}>Favorite Number:</label>
        <input id="favoriteNumber" type="number" {...register("favoriteNumber")} style={{ marginRight: '4px' }} />
        <input type="submit" value="Submit" />
      </form>
    </section>
  )
}

export default ReactHookFormContainer;