import { cn } from '@/lib/utils'
import { Window } from '@/system/windows/Window'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ChatBubble } from './ChatBubble'
import { SocialButton } from './SocialButton'
import profileImg from '@/assets/profile/profile.png'

export function ContactWindow() {
    return (
        <Window
            id="contact"
            title="Contact"
            config={{ size: { width: 400, height: 650 } }}
            className="overflow-auto"
        >
            {/* Chat header */}
            <div className="flex gap-5 border-b-2 border-gray-200 px-6 py-4">
                <div className="relative">
                    <img
                        src={profileImg}
                        className="bg-melrose-50 h-20 rounded-full"
                    />
                    <div
                        className={cn(
                            'absolute right-0 bottom-0 h-5 w-5 rounded-full',
                            'border-3 border-white bg-green-400'
                        )}
                    />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <span className="text-2xl">Ryan</span>
                    <span className="text-sm">Online</span>
                </div>
            </div>

            {/* Chat messages */}
            <div className="flex flex-col gap-2 px-6 py-4">
                <ChatBubble>
                    <p className="m-0 text-5xl">👋😊</p>
                </ChatBubble>
                <ChatBubble className="flex flex-col">
                    <p className="mb-3">
                        Nice to meet you! If you’d like to get in touch, drop me
                        a message at{' '}
                        <a href="mailto:hi@ryantzw.dev" className="underline">
                            hi@ryantzw.dev
                        </a>
                        !
                    </p>
                    <a
                        className={cn(
                            'shadow-solid w-fit rounded-full bg-white px-6 py-3',
                            'active:translate-y-1 active:shadow-none'
                        )}
                        href="mailto:hi@ryantzw.dev"
                    >
                        <span className="font-fredoka">Open mail app</span>
                    </a>
                </ChatBubble>
                <ChatBubble className="flex flex-col">
                    <p className="mb-3">
                        You can also find me on the following platforms!
                    </p>
                    <div className="flex gap-3">
                        <SocialButton href="https://www.linkedin.com/in/ryan-tzw/">
                            <FontAwesomeIcon
                                icon={faSquareLinkedin}
                                size="xl"
                            />
                        </SocialButton>
                        <SocialButton href="https://github.com/ryan-tzw">
                            <FontAwesomeIcon icon={faGithub} size="xl" />
                        </SocialButton>
                    </div>
                </ChatBubble>
            </div>
        </Window>
    )
}
