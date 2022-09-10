import "./header.css";


export default function Header() {
  return (
    <div className="header">
    <div className="header-title">
      <h1 className="main-title">Film Blog</h1>
      <p className="tag-line">Built with MERN Stack</p>
    </div>
      <img className="header-image" src="https://static.toiimg.com/photo/msid-93813587/93813587.jpg" alt="movie"/>
    </div>
  )
}
