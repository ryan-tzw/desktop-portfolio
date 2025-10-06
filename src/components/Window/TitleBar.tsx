interface TitleBarProps extends React.HTMLProps<HTMLDivElement> {
    title: string
}

export function TitleBar({ title, children, ...props }: TitleBarProps) {
    return (
        <div className="flex h-12 cursor-default text-white" {...props}>
            <h1 className="font-fredoka h-full flex-1 content-center bg-[rgba(0,0,0,0.7)] px-6">
                {title}
            </h1>
            {children}
        </div>
    )
}
