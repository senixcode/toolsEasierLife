import { details } from "../../../utils/details.mock";
import CardDetail from "../../molecules/CardDetail";


function Detail() {

  return (
    <section className='cards__container'>
      {details.map((detail) => (<CardDetail key={detail.id} detail={detail} />))}
    </section>
  )
}
export default Detail