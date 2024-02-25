
import "./Styles.css";
const ToggleButton = ({theme,toggleTheme}) => {
  return (
    <label className="switch">
    <input
    checked ={theme === "light"}
    onChange={toggleTheme}
      type="checkbox"
    />
    <span className="slider round" />
  </label>
  )
}

export default ToggleButton