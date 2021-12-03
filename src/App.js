import './App.scss';

// import image
import backgroundImage from './assets/images/backgroundImage.jpg'
function App() {
  return (
    <div className="App">
      <div className="login">
        <div className="container">
          <h1>ورود کاربران</h1>
          <div className="section">
            <div><label htmlFor="" placeholder="email or mobilePhone">نام کاربری</label></div>
            <input type="text" />
          </div>

          <div className="section">
            <div><label htmlFor="" >پسورد</label></div>
            <input type="password" />
          </div>
          <button>ورود</button>
          <div className="media">
            <a href="">Facebook</a>
            <a href="">Google</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
