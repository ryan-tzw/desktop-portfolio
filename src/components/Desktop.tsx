import { cn } from '@/lib/utils'
import { NavButton } from './NavButton'

export function Desktop() {
    return (
        <>
            <div
                className={cn(
                    'absolute inset-0 mx-2 my-4 py-20',
                    'shadow-solid rounded-2xl border bg-[rgba(255,255,255,0.4)] backdrop-blur',
                    'items-center overflow-auto text-center',
                    'transition duration-300'
                )}
            >
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
                        image="src/assets/icons/dev-folder.png"
                        text="Dev"
                        onClick={() => {}}
                    />
                    <NavButton
                        image="src/assets/icons/about.png"
                        text="About"
                        onClick={() => {}}
                    />
                    <NavButton
                        image="src/assets/icons/contact.png"
                        text="Contact"
                        onClick={() => {}}
                    />
                    <NavButton
                        image="src/assets/icons/creative-folder.png"
                        text="Creative"
                        onClick={() => {}}
                    />
                    <NavButton
                        image="src/assets/icons/desktop.png"
                        text="This PC"
                        onClick={() => {}}
                    />
                    <NavButton
                        image="src/assets/icons/music.png"
                        text="Music"
                        onClick={() => {}}
                    />
                </nav>
            </div>
        </>
    )
}
