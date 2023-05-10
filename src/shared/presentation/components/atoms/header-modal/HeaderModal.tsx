import {FC} from 'react'

type PropsHeaderModal = {
    title: string
}
const HeaderModal:FC<PropsHeaderModal> = ({ title }) => {
    return (
        <div className="header-modal">
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default HeaderModal