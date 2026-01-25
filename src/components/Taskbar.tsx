import { cn } from '@/lib/utils'
import {
    faBatteryThreeQuarters,
    faWifi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

export function Taskbar() {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date())
        }, 1000) // Update every second

        return () => clearInterval(interval)
    }, [])

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
    }
    const timeString = now.toLocaleDateString('en-US', options).replace(',', '')

    return (
        <>
            <div
                className={cn(
                    'z-10 hidden h-8 w-full md:flex',
                    'items-center gap-2 px-6 text-sm shadow-sm',
                    'bg-[rgba(255,255,255,0.8)] backdrop-blur-xs'
                )}
            >
                <span className="font-fredoka">{`</>`}</span>
                <span className="font-fredoka">Ryan</span>
                <div className="flex-1" />
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faBatteryThreeQuarters} />
                <span className="font-fredoka">{timeString}</span>
            </div>
        </>
    )
}
