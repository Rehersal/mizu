import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="bar">
      <div className="navLeft">
        <img className="navImg" src="https://cdn.discordapp.com/attachments/856418395939012609/1142411435029311608/BadFight.png" alt="" />
        <p className="navLeftTitle">Mizu's Blog</p>
      </div>

      <div className="navCenter">
        <ul className="navList">
            <li className ="navListItem">Home</li>
            <li className ="navListItem">About</li>
            <li className ="navListItem">Contact</li>
            <li className ="navListItem">Black Desert Online</li>
            <li className ="navListItem">Epic Seven</li>
        </ul>
      </div>

      <div className="navRight">
        <i className="navRightIcon fa-brands fa-facebook"></i>
        <i className="navRightIcon fa-brands fa-linkedin"></i>
        <i className="navRightIcon fa-brands fa-github"></i>
        <i className="navRightIcon fa-brands fa-youtube"></i>
      </div>
    </div>
  )
}
