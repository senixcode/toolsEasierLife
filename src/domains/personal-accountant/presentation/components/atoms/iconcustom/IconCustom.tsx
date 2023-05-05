import React from 'react'
import CIcon from '@coreui/icons-react';

function IconCustom({ btnClass, ciconClass = "", ciconOnclick, icon }) {
    return (
        <button className={btnClass}  onClick={() => ciconOnclick()}>
            <CIcon
                icon={icon}
                className={ciconClass}
               
                size="custom-size" />
        </button>
    )
}

export default IconCustom