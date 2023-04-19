import './modalRegister.css'

const RegisterDetail = ({handleOpenModal}) => (

  <form className="container-form">
    <div>
      <label htmlFor="">Name</label>
      <input type="text" name='name' className="input" />
    </div>
    <div>
      <label htmlFor="">Detail Type </label>
      <select name="" id="" value={0} className="input">
        <option value="0" disabled></option>
        <option value="1" >INCOME</option>
        <option value="2" >EGRESS</option>
      </select>
    </div>
    <div>
      <label htmlFor="">Amount</label>
      <input type="text" name='amount' className="input" />
    </div>
    <div>
      <label htmlFor="">Amount of money</label>
      <input type="text" name='amountOfMoney' className="input" />
    </div>
    <div>
      <label htmlFor="">Description</label>
      <textarea type="text" name='description' rows={3} className="input" />
    </div>
    <div className="container-btns">
      <button onClick={handleOpenModal} className="btn secondary">Cancelar</button>
      <button className="btn primary">Guardar</button>
    </div>
  </form>
)

export default RegisterDetail