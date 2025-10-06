export function ProfileImage() {
    return (
        <>
            <div className="relative aspect-square content-center">
                <img
                    src="/src/assets/profile/profile.png"
                    alt="Profile image"
                    className="w-full"
                />
                <img
                    src="/src/assets/profile/border.svg"
                    alt="Image border"
                    className="absolute top-[50%] left-[50%] size-[102%] max-w-none -translate-x-[50%] -translate-y-[50%]"
                />
            </div>
        </>
    )
}
