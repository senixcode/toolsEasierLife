import { useContext } from 'react'
import HeaderModal from 'shared/presentation/components/atoms/header-modal/HeaderModal'
import RegisterDetail from 'domains/personal-accountant/presentation/components/organisms/register-detail/ModalRegister'
import ModalTemplate from 'shared/presentation/components/molecules/modal-template/ModalTemplate'
import ModalContext, { Actions } from 'core/context/ModalContext';
import { ACTIONS_MODALS } from 'core/const/actionsModal.const';

const getTitle = (actions:Actions) => {
  if (actions[ACTIONS_MODALS.register]) return "Registrar"
  if (actions[ACTIONS_MODALS.editer]) return "Editar"
}

function TemplateSaveDetail() {
  const { modalState } = useContext(ModalContext)

  return (
    <ModalTemplate>
      <HeaderModal title={`${getTitle(modalState.actions)}`} />
      <RegisterDetail />
    </ModalTemplate>
  )
}

export default TemplateSaveDetail