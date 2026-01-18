import { cn } from '@/lib/utils'
import { NavButton } from '../../components/NavButton'
// images
import dev from '@/assets/icons/dev-folder.png'
import about from '@/assets/icons/about.png'
import contact from '@/assets/icons/contact.png'
// import creative from '@/assets/icons/creative-folder.png'
// import pc from '@/assets/icons/desktop.png'
// import music from '@/assets/icons/music.png'

export function Launcher() {
    return (
        <div
            className={cn(
                'grid place-items-center overflow-auto text-center',
                'h-full max-h-[min(600px,95dvh)] w-full max-w-[min(480px,95dvw)]',
                'shadow-solid rounded-2xl border bg-[rgba(255,255,255,0.8)] backdrop-blur-xs',
                'transition duration-300'
            )}
        >
            <div>
                <header className="mb-4">
                    <h1 className="font-caveat text-6xl">Hi! I'm Ryan.</h1>
                    <p className="mt-6 text-2xl">Welcome to my site!</p>
                    <p className="mt-4">
                        Click on the buttons below to view more.
                        <br />
                        Have fun browsing!
                    </p>
                </header>
                <nav
                    className={cn(
                        'mx-auto grid w-80 grid-cols-3 justify-center gap-2',
                        'sm:grid-cols-3'
                    )}
                >
                    <NavButton id="dev" image={dev} text="Dev" />
                    <NavButton id="about" image={about} text="About" />
                    <NavButton id="contact" image={contact} text="Contact" />
                    {/* <NavButton id="creative" image={creative} text="Creative" />
                    <NavButton id="this-pc" image={pc} text="This PC" />
                    <NavButton id="music" image={music} text="Music" /> */}
                </nav>
            </div>
        </div>
    )
}
