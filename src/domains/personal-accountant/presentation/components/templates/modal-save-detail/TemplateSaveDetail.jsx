import React, { useContext } from 'react'
import HeaderModal from '../../../../../../shared/modal/components/header/HeaderModal'
import RegisterDetail from '../../organisms/register-detail/ModalRegister'
import ModalTemplate from '../../../../../../shared/modal/ModalTemplate'
import ModalContext from '../../../../../../core/context/ModalContext';
import { ACTIONS_MODALS } from '../../../../../../core/const/actionsModal.cons';

const getTitle = (modalState) => {
  if (modalState.payload.actions[ACTIONS_MODALS.register]) return "Register"
  if (modalState.payload.actions[ACTIONS_MODALS.editer]) return "Editer"
}

function TemplateSaveDetail() {
  const { modalState } = useContext(ModalContext)
  console.log("modalState", modalState);
  return (
    <ModalTemplate>
      <HeaderModal title={`${getTitle(modalState)} Detail`} />
      <RegisterDetail />
    </ModalTemplate>
  )
}

export default TemplateSaveDetail