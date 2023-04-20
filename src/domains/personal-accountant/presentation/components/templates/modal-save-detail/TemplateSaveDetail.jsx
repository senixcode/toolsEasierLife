import React, { useEffect, useState } from 'react'
import HeaderModal from '../../../../../../shared/modal/components/header/HeaderModal'
import RegisterDetail from '../../organisms/register-detail/ModalRegister'
import ModalTemplate from '../../../../../../shared/modal/ModalTemplate'
import { typeModal } from '../../../conts/typeModal.conts';

const getTitle = (isOpen) => {
    if(isOpen[typeModal.register]) return "Register"
    if(isOpen[typeModal.editer]) return "Editer"
} 
function TemplateSaveDetail({isOpen, handleOpenModal}) {
console.log("isOpen", isOpen);

  return (
    <ModalTemplate isOpen={isOpen.open} onRequestClose={() => handleOpenModal("")}>
        <HeaderModal title={`${getTitle(isOpen)} Detail`}/>
        <RegisterDetail handleOpenModal={() => handleOpenModal(typeModal.register)}/>
   </ModalTemplate>
  )
}

export default TemplateSaveDetail