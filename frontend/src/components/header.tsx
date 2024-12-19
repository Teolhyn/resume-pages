import Avatar from "@mui/material/Avatar";

export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar
          alt="Teemu Hynnä"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <p>Teemu Hynnä</p>
        <p>Full Stack Developer</p>
      </header>
    </div>
  );
}
