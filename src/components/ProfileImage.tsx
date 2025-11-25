import profileImg from '@/assets/profile/profile.png'
import profileImgBorder from '@/assets/profile/border.svg'

export function ProfileImage() {
    return (
        <>
            <div className="relative aspect-square content-center">
                <img src={profileImg} alt="Profile image" className="w-full" />
                <img
                    src={profileImgBorder}
                    alt="Image border"
                    className="absolute top-[50%] left-[50%] size-[102%] max-w-none -translate-x-[50%] -translate-y-[50%]"
                />
            </div>
        </>
    )
}
