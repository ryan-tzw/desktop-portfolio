import { ProfileImage } from '@/components/ProfileImage'
import { Section } from '@/components/Section'
import { Window } from '@/system/windows/Window'

export function AboutWindow() {
    return (
        <Window
            id="about"
            title="About"
            config={{ size: { width: 650, height: 880 } }}
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
            <p className="mx-auto max-w-[490px]">
                TLDR: I love making things, learning new things, and collecting
                hobbies like they're Pokémon.
            </p>

            <Section title="About Me" className="mx-auto max-w-[490px]">
                <p>
                    I'm a software developer, and I love blending engineering
                    and design to create immersive and interactive experiences
                    for the web - the kind that feels snappy and a joy to
                    interact with.
                </p>
                <Section title="My Journey" variant="small">
                    <p>
                        Web development was my gateway to programming; it gave
                        me room for both creative expression and logical
                        problem-solving. Since then, I discovered WebGL and
                        Three.js, and immediately wanted to put 3D graphics on
                        everything. That led into learning Blender for 3D
                        modelling, texturing, UV unwrapping, baking... the whole
                        pipeline. I'm still not a Blender magician by any means,
                        but I'm slowly learning and improving. Lately I've also
                        been getting into shader coding to create even more
                        dynamic and appealing visual effects.
                    </p>
                    <p>
                        I think that whole path is pretty typical for me; one
                        curiosity leads to the next, and suddenly I've got a
                        hundred tabs open and I've fallen into another rabbit
                        hole, like:
                    </p>
                    {/* // TODO: replace with cards with info that pops up when hovered */}
                    <ul className="mb-6 list-disc pl-4">
                        <li>
                            Machine learning: neural nets, transformers, and
                            doing little experiments
                        </li>
                        <li>
                            3D printing: the machine itself, slicers, and
                            eventually Fusion 360 for parametric modelling
                        </li>
                        <li>
                            Custom keyboards: switches, keycaps, layouts, custom
                            mods and tiny optimisations, sound tests, etc.
                        </li>
                    </ul>
                </Section>
                <Section title="Other Interests" variant="small">
                    <p>
                        Outside of the technical stuff, I occasionally do
                        digital art as well. You can see some of that show up on
                        this website in the icons and self-portrait.
                    </p>
                    {/* //TODO: INCLUDE LINK */}
                    <p>
                        Lastly, I love video games. It's what I grew up with,
                        and also what sparked my interest in computers. I still
                        remember being five years old and playing Pokemon on the
                        GBA SP.
                        {/* Some of my all-time favourite games if you're
                        interested: (link here) */}
                    </p>
                    <p>
                        Naturally, as someone who loves playing video games, I
                        want to make my own as well. And that's something I'm
                        working on! But the scope of a game project is vast and
                        requires months or even years of effort. Combine that
                        with my rapidly shifting interests and ever-growing
                        graveyard of projects, and well... it may take a while,
                        but hopefully one day I'll get there.
                    </p>
                </Section>
                <Section title="Conclusion" variant="small">
                    <p>
                        Thanks for taking the time to read through my About Me
                        section! I hope it gave you a glimpse into who I am and
                        what drives me. If you want to, feel free to reach out
                        via the contact form.
                    </p>
                </Section>
            </Section>
        </Window>
    )
}
