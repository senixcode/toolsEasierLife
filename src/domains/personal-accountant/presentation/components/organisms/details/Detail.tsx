import { useContext } from 'react'
import CardDetail from 'domains/personal-accountant/presentation/components/molecules/card-detail/CardDetail'
import CardSkeleton from 'domains/personal-accountant/presentation/components/molecules/card-skeleton/CardSkeleton'
import { createListMock } from 'shared/infrastructure/adapters/createListMock'
import DetailContext from 'domains/personal-accountant/presentation/context/DetailContext'
import D, { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'
import DetailsMock from './DetailMock'

function Detail() {
  const { status, details, isFetching } = useContext(DetailContext)
  if (status === 'error') return (<DetailsMock />)
  return (
    <section className='cards__container'>
      {status === 'loading' || isFetching ? (
        createListMock(2).map((_, index) => (
          <CardSkeleton key={index} />
        ))
      ) : (
        details && details.map((detail: TypeDetailBody) => (
          <CardDetail
            key={detail[D.id]}
            detail={detail} />
        ))
      )}
    </section>
  )
}
export default Detail