import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
}
