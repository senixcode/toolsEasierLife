import { FC } from 'react';
import CIcon from '@coreui/icons-react';

export type PropsIconCustom = {
    btnClass: string | undefined
    ciconClass?: string | undefined
    ciconOnclick: React.MouseEventHandler<HTMLButtonElement> | undefined
    icon: string | string[] | undefined
}

const IconCustom:FC<PropsIconCustom> = ({ btnClass, ciconClass = "", ciconOnclick, icon }) => {
    return (
        <button className={btnClass}  onClick={ciconOnclick}>
            <CIcon
                icon={icon}
                className={ciconClass}
               
                size="custom-size" />
        </button>
    )
}

export default IconCustom