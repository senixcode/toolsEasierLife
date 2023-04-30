import CardDetail from "../../molecules/card-detail/CardDetail";
import CardSkeleton from "../../molecules/card-skeleton/CardSkeleton";
import { createListMock } from "../../../../../../shared/infrastructure/adapters/createListMock";
import useDetailsList from "../../../hooks/services/useDetailsList";


function Detail() {
  const { status, details, error } = useDetailsList()

  if (status === 'error') return <span>Error: {error.message}</span>

  return (
    <section className='cards__container'>
      {status === 'loading' ? (
        createListMock(2).map((_, index) => (
          <CardSkeleton key={index} />
        ))
      ) : (
        details.map((detail) => (
          <CardDetail key={detail.id} detail={detail} />
        ))
      )}
    </section>
  )
}
export default Detail