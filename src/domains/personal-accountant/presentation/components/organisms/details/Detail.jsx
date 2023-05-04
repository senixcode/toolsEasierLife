import CardDetail from "../../molecules/card-detail/CardDetail";
import CardSkeleton from "../../molecules/card-skeleton/CardSkeleton";
import { createListMock } from "../../../../../../shared/infrastructure/adapters/createListMock";
import { useContext } from "react";
import DetailContext from "../../../context/DetailContext";
import D from "../../../../domain/clases/Details";

function Detail() {
  const { status, details, error, isFetching } = useContext(DetailContext)

  if (status === 'error') return <span>Error: {error.message}</span>

  return (
    <section className='cards__container'>
      {status === 'loading' || isFetching ? (
        createListMock(2).map((_, index) => (
          <CardSkeleton key={index} />
        ))
      ) : (
        details && details.map((detail) => (
          <CardDetail key={detail[D.id]} detail={detail} />
        ))
      )}
    </section>
  )
}
export default Detail