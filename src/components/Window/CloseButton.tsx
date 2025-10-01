import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CloseButton(
    props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button
            className="bg-[rgba(0,0,0,0.7)] px-4 hover:bg-[rgba(128,0,0,0.7)]"
            {...props}
        >
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}
