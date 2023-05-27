import { useContext } from 'react'
import HeaderModal from 'shared/presentation/components/atoms/header-modal/HeaderModal'
import RegisterDetail from 'domains/personal-accountant/presentation/components/organisms/register-detail/ModalRegister'
import ModalTemplate from 'shared/presentation/components/molecules/modal-template/ModalTemplate'
import ModalContext, { Actions } from '@/domains/personal-accountant/presentation/context/ModalRegisterContext';
import { ACTIONS_REGISTER_MODALS } from '@/domains/personal-accountant/presentation/conts/actionsRegisterModal.const';

const getTitle = (actions:Actions) => {
  if (actions[ACTIONS_REGISTER_MODALS.register]) return "Registrar"
  if (actions[ACTIONS_REGISTER_MODALS.editer]) return "Editar"
}

function TemplateSaveDetail() {
  const { modalState, closeModal } = useContext(ModalContext)

  return (
    <ModalTemplate modalState={modalState.open} closeModal={closeModal}>
      <HeaderModal title={`${getTitle(modalState.actions)}`} />
      <RegisterDetail />
    </ModalTemplate>
  )
}

export default TemplateSaveDetail