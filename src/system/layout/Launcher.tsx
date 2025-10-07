import { cn } from '@/lib/utils'
import { NavButton } from '../../components/NavButton'

export function Launcher() {
    return (
        <div
            className={cn(
                'grid place-items-center overflow-auto text-center',
                'h-full max-h-[min(600px,95dvh)] w-full max-w-[min(480px,95dvw)]',
                'shadow-solid rounded-2xl border bg-[rgba(255,255,255,0.4)] backdrop-blur',
                'transition duration-300'
            )}
        >
            <div>
                <header className="mb-4">
                    <h1 className="font-caveat text-6xl">Hi! I'm Ryan.</h1>
                    <p className="mt-6 text-2xl">Welcome to my desktop!</p>
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
                    <NavButton
                        id="dev"
                        image="src/assets/icons/dev-folder.png"
                        text="Dev"
                    />
                    <NavButton
                        id="about"
                        image="src/assets/icons/about.png"
                        text="About"
                    />
                    <NavButton
                        id="contact"
                        image="src/assets/icons/contact.png"
                        text="Contact"
                    />
                    <NavButton
                        id="creative"
                        image="src/assets/icons/creative-folder.png"
                        text="Creative"
                    />
                    <NavButton
                        id="this-pc"
                        image="src/assets/icons/desktop.png"
                        text="This PC"
                    />
                    <NavButton
                        id="music"
                        image="src/assets/icons/music.png"
                        text="Music"
                    />
                </nav>
            </div>
        </div>
    )
}
