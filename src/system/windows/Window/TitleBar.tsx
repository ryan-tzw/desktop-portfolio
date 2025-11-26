interface TitleBarProps extends React.HTMLProps<HTMLDivElement> {
    title: string
}

export function TitleBar({ title, children, ...props }: TitleBarProps) {
    return (
        <div className="flex h-12 cursor-default bg-zinc-700 text-white">
            <h1
                className="font-fredoka h-full flex-1 content-center px-6"
                {...props}
            >
                {title}
            </h1>
            {children}
        </div>
    )
}
