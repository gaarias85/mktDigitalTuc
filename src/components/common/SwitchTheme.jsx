import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const SwitchTheme = () => {
  // const userTheme = JSON.parse(localStorage.getItem('userTheme')) || 'dark'
  const [theme, setTheme] = useState(
    localStorage.getItem("userTheme") || "dark"
  );
  const [icontheme, setIconTheme] = useState(
    theme === "dark" ? "bi-moon-stars-fill" : "bi-brightness-high-fill"
  );

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("userTheme", theme);
  }, [theme]);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setIconTheme("bi-brightness-high-fill");
    } else {
      setTheme("dark");
      setIconTheme("bi-moon-stars-fill");
    }
  };
  return (
    <Button variant="dark" className="rounded-circle" onClick={changeTheme}>
      <i className={"bi " + icontheme}></i>
    </Button>
  );
};

export default SwitchTheme;
