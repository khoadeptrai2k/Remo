import menu from "../data/menu";
import Logo from "../../assets/images/Logo.png";

function Sidebar() {
  const menuData = [...menu];

  return (
    <div id="mainSideMenu" className="sidebar px-4 py-4 py-md-5 me-0">
      <div className="d-flex flex-column h-100">
        <a href="hr-dashboard" className="mb-0 brand-icon">
          <span className="logo-icon">
            <img style={{width:"100%",height: "100%"}} src={Logo} />
          </span>
          <span className="logo-text">REMO</span>
        </a>
        <ul className="menu-list flex-grow-1 mt-3">
          {menuData.map((d, i) => {
            return (
              <li key={"shsdg" + i}>
                <a className={`m-link `} href="#!">
                  <i className={d.iconClass}></i>
                  <span>{d.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="list-unstyled mb-0">
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="theme-switch"
              />
              <label className="form-check-label" htmlFor="theme-switch">
                Enable Dark Mode!
              </label>
            </div>
          </li>
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-rtl">
              <input
                className="form-check-input"
                type="checkbox"
                checked={document.body.classList.contains("rtl_mode")}
                id="theme-rtl"
              />
              <label className="form-check-label" htmlFor="theme-rtl">
                Enable RTL Mode!
              </label>
            </div>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-light"
        >
          <span className="ms-2">
            <i className="icofont-bubble-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
