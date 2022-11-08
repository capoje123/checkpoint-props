import "./App.css";
import Profile from "./profile/Profile";
import pic from "./profile/pic.webp"

function App() {
  return (
    <div className="App">
      <Profile
        fullName="Issam Jemaa"
        age="30 years old"
        profession="Fullstack web developper"
        email="Issam.jemaa92@gmail.com"
        phone="+21698765432"
        handleName={(show) => {
          alert(show);
        }}
      >
        {pic}
      </Profile>
    </div>
  );
}

export default App;
