import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './pages/Login';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';
import CardScreen from './pages/CardScreen';
import { useSelector } from 'react-redux';
import Admin from './pages/Admin';
import Iletisim from './components/Iletisim';


function App() {

  const sidebarList = useSelector(state=> state.sidebarList)
  const { sidebar } = sidebarList
  console.log(sidebar);
  
  return (
    <>
     {sidebar && <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'300px',height:'700px',background:'black',color:'gray',borderRadius:'0 10px 10px 10px',position:'absolute',top:'100px',left:0,zIndex:50,border:'2px solid gray'}}>
           <span style={{fontSize:'30px',color:'blue',borderBottom:'1px solid blue',marginBottom:'8px'}}>Erkek Giyim</span>
           <ul style={{listStyle:'none',fontSize:'18px'}}>
             <li style={{paddingTop:'4px'}}><i class="fas fa-shoe-prints"></i>&nbsp; Ayakkabı</li>
             <li style={{paddingTop:'4px'}}><i class="fas fa-tshirt"></i>&nbsp; Gömlek-Tişört</li>
             <li style={{paddingTop:'4px'}}><i class="fas fa-user-secret"></i>&nbsp; Ceket</li>
             <li style={{paddingTop:'4px'}}><i class="fas fa-male"></i>&nbsp; İç Giyim</li>
             <li style={{paddingTop:'4px'}}><i class="fas fa-air-freshener"></i>&nbsp; Parfüm</li>
             <li style={{paddingTop:'4px'}}><i class="fas fa-wallet"></i>&nbsp; Cüzdan</li>
             <li style={{paddingTop:'4px'}}><i class="fas fa-archway"></i>&nbsp; Kemer</li>
             <li style={{paddingTop:'4px'}}><i class="fas fa-hat-cowboy"></i>&nbsp; Şapka</li>
           </ul>
           <span style={{fontSize:'30px',color:'pink',borderBottom:'1px solid pink',marginBottom:'8px'}}>Kadın Giyim</span>
            <ul style={{listStyle:'none',fontSize:'18px'}}>
              <li style={{paddingTop:'4px'}}><i class="fas fa-shoe-prints"></i>&nbsp; Ayakkabı</li>
              <li style={{paddingTop:'4px'}}><i class="fas fa-tshirt"></i>&nbsp; Gömlek-Tişört</li>
              <li style={{paddingTop:'4px'}}><i class="fas fa-user-secret"></i>&nbsp; Ceket</li>
              <li style={{paddingTop:'4px'}}><i class="fas fa-female"></i>&nbsp; İç Giyim</li>
              <li style={{paddingTop:'4px'}}><i class="fas fa-air-freshener"></i>&nbsp; Parfüm</li>
              <li style={{paddingTop:'4px'}}><i class="fas fa-wallet"></i>&nbsp; Cüzdan</li>
              <li style={{paddingTop:'4px'}}><i class="fas fa-archway"></i>&nbsp; Kemer</li>
              <li style={{paddingTop:'4px'}}><i class="fas fa-hat-cowboy"></i>&nbsp; Şapka</li>
            </ul>

      </div>} 
    <div className="App">
      <Router >
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/detaylar/:id" component={DetailScreen} />
        <Route exact path="/cart/:id?" component={CardScreen} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/iletisim" component={Iletisim} />
      </Router>
    </div>

    </>
  );
}

export default App;
