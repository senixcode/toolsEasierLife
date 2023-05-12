
import Detail from 'domains/personal-accountant/domain/clases/Details'
import useFormDetail from 'domains/personal-accountant/presentation/hooks/useFormDetail'
import { getTypeDetail } from 'domains/personal-accountant/presentation/utils/getTypeDetail'
import './modalRegister.css'

const titles = {
 [Detail.name]: 'Nombre',
 [Detail.detailTypeId]: 'Tipo',
 [Detail.amount]: 'Cantidad',
 [Detail.amountOfMoney]: 'Costo',
 [Detail.description]: 'Descripción'
}

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
        <label htmlFor="">{titles[Detail.name]}</label>
        <input
          value={form[Detail.name]}
          name={Detail.name}
          onChange={(e) => handleChange(e, Detail.name, 3)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="">{titles[Detail.detailTypeId]}</label>
        <select
          value={form[Detail.detailTypeId]}
          name={Detail.detailTypeId}
          onChange={(e) => handleChange(e, Detail.detailTypeId)}
          className="input"
        >
          <option value="0" disabled></option>
          {[1, 2].map(value => (
            <option 
            key={value}
            value={value} >
              {getTypeDetail(value)}
              </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="">{titles[Detail.amount]}</label>
        <input
          value={form[Detail.amount]}
          name={Detail.amount}
          onChange={(e) => handleChange(e, Detail.amount)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="">{titles[Detail.amountOfMoney]}</label>
        <input
          value={form[Detail.amountOfMoney]}
          name={Detail.amountOfMoney}
          onChange={(e) => handleChange(e, Detail.amountOfMoney)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="">{titles[Detail.description]}</label>
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