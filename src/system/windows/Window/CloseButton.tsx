import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CloseButton(
    props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button className="cursor-pointer px-4 hover:bg-rose-900" {...props}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}
