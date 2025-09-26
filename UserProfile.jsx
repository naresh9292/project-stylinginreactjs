import style from './CSS/userprofile.module.css'

function UserProfile() {
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
                <div className={style.user}>
                <img className={style.img} src="https://www.w3schools.com/howto/img_avatar.png" />
                <div className={style.text}>
                    <h4>Naresh saini</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile