import React from 'react'
import HeaderModal from '../../../../../../shared/modal/components/header/HeaderModal'
import RegisterDetail from '../../organisms/register-detail/ModalRegister'
import ModalTemplate from '../../../../../../shared/modal/ModalTemplate'

function TemplateSaveDetail({isOpen, handleOpenModal}) {
  return (
    <ModalTemplate isOpen={isOpen} onRequestClose={handleOpenModal}>
        <HeaderModal title="Register Detail"/>
        <RegisterDetail handleOpenModal={handleOpenModal}/>
   </ModalTemplate>
  )
}

export default TemplateSaveDetail