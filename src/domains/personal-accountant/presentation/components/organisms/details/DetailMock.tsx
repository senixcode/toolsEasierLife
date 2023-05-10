import Detail, { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'
import CardDetail from 'domains/personal-accountant/presentation/components/molecules/card-detail/CardDetail'
import { detailsMock } from 'domains/personal-accountant/presentation/utils/details.mocks'

function DetailsMock() {
    return (
      <>
        <h3 className='text-center'>Error no conection apis 404</h3>
        <section className='cards__container'>
  
          {
            detailsMock.map((detail: TypeDetailBody) => (
              <CardDetail
                key={detail[Detail.id]}
                detail={detail} />
            ))
          }
        </section>
      </>
  
    )
  }
  export default DetailsMock