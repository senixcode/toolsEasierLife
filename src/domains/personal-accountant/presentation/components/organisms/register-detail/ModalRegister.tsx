
import Detail from '../../../../domain/clases/Details'
import useFormDetail from '../../../hooks/useFormDetail'
import './modalRegister.css'

const RegisterDetail = () => {
  const { form, handleChange, handleSubmit, closeModal } = useFormDetail()

  return (
    <form className="container-form" onSubmit={handleSubmit} >
      <input type="hidden"
        defaultValue={form[Detail.id]}
        name={Detail.id}
        onChange={(e) => handleChange(e, Detail.id)}
      />
      <div>
        <label htmlFor="">Name</label>
        <input
          defaultValue={form[Detail.name]}
          name={Detail.name}
          onChange={(e) => handleChange(e, Detail.name, 3)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="">Detail Type</label>
        <select
          value={form[Detail.detailType]}
          name={Detail.detailType}
          onChange={(e) => handleChange(e, Detail.detailType)}
          className="input"
        >
          <option value="0" disabled></option>
          <option value="1" >INCOME</option>
          <option value="2" >EGRESS</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Amount</label>
        <input
          defaultValue={form[Detail.amount]}
          name={Detail.amount}
          onChange={(e) => handleChange(e, Detail.amount)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="">Amount of money</label>
        <input
          defaultValue={form[Detail.amountOfMoney]}
          name={Detail.amountOfMoney}
          onChange={(e) => handleChange(e, Detail.amountOfMoney)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <textarea
          defaultValue={form[Detail.description]}
          name={Detail.description}
          onChange={(e) => handleChange(e, Detail.description)}
          rows={3}
          className="input" />
      </div>
      <div className="container-btns">
        <button type='button' onClick={closeModal} className="btn secondary">Cancelar</button>
        <button type="submit" className="btn primary">Guardar</button>
      </div>
    </form>
  )
}

export default RegisterDetail