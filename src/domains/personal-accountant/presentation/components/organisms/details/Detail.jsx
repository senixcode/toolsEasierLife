import { details } from "../../../utils/details.mock";
import CardDetail from "../../molecules/card-detail/CardDetail";


function Detail({ handleOpenModal }) {

  return (
    <section className='cards__container'>
      {details.map((detail) => (<CardDetail
        key={detail.id}
        detail={detail}
        handleOpenModal={handleOpenModal}
      />))}
    </section>
  )
}
export default Detail