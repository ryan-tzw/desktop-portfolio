import { ProfileImage } from '@/components/ProfileImage'
import { Section } from '@/components/Section'
import { Window } from '@/system/windows/Window'

export function AboutWindow() {
    return (
        <Window
            id="about"
            title="About"
            size={{ width: 480, height: 600 }}
            className="flex flex-col gap-6 p-6 pb-12"
        >
            <div className="mx-auto my-4 grid grid-cols-2 place-items-center justify-center gap-6">
                <ProfileImage />
                <div className="@container size-full content-center">
                    <h1 className="font-caveat text-4xl text-[30cqw]">
                        Hi there! <br /> I'm Ryan.
                    </h1>
                </div>
            </div>
            <Section title="Bio" className="mx-auto max-w-[490px]">
                <p>
                    I’m a creative developer who loves turning imaginative ideas
                    into interactive digital experiences that blend design and
                    engineering.
                </p>
                <p>
                    I enjoy building performant web applications with React and
                    TypeScript, and I love crafting immersive, visually rich
                    interfaces with Three.js. I’m driven by curiosity, creative
                    problem-solving, and pushing the boundaries of what the web
                    can do.
                </p>
            </Section>
            <Section title="Interests" className="mx-auto max-w-[490px]">
                <p>
                    Outside of code, I enjoy playing video games, 3D modelling,
                    3D printing, and digital art!
                </p>
                <p>
                    In the future, I'd love to do some game development as well!
                    But for now, I'm more focused on web development.
                </p>
            </Section>
        </Window>
    )
}
