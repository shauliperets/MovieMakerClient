import logoImage from "./images/film-logo.jpg";

function Logo() {
  return (
    <div class="logo">
      <img src={logoImage} alt="Logo image" className="logo__image"></img>
      <div className="logo__title">טיוי.דיאי</div>
    </div>
  );
}

export default Logo;
