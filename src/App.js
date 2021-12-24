import './App.css';
import Profile from './Profile/Profile';
import Photo from '../src/Photoyasser.jpg';

function App() {
  const handleName =(fullName) => alert(fullName);
  const styleProfile={
    margin:20,
    padding:20,
    fontFamily:"helvetica",
    textAlign:"center",
    border:"5px solid rgba(0,76,63)",
    backgroundColor:"rgba(0,152,127,0.1)",
    borderRadius:25,
  };
  const styleImg= {width:300};
  return (
    <div style={styleProfile}>
      <Profile fullName="Junior" 
      profession="student" 
      handleName={handleName} 
      >
        <img src={Photo} alt="junior" style={styleImg} />

      </Profile>
    </div>
  );
}

export default App;

