
import './App.css';
import './Style.scss';
import Top from './Comp/Top';
import Nav from './Comp/Nav';
import Home from './Page/Home';
import Footer from './Comp/Footer';
import { Routes, Route, Link } from "react-router-dom";
import Grahapustha from './Comp/nav/Grahapustha';
import Rajniti from './Comp/nav/Rajniti';
import Samaj from './Comp/nav/Samaj';
import Karobar from './Comp/nav/Karobar';
import Kala from './Comp/nav/Kala';
import Khel from './Comp/nav/Khel';
import Bichar from './Comp/nav/Bichar';
import Wolaga from './Comp/nav/Wolaga';
import Bisesh from './Comp/nav/Bisesh';
import Nirbachan from './Comp/nav/Nirbachan';
import Worldcup from './Comp/nav/Worldcup';
import Unicode from './Comp/nav/Unicode';
import English from './Comp/nav/English';
import Hadakada from './Comp/nav/Hadakada';
import Sangraha from './Comp/nav/Sangraha';
import Aam from './Comp/nav/Aam';
import Nirbachan1 from './Comp/nav/Nirbachan1';
import Footbal from './Comp/nav/Footbal';
import Amale from './Comp/nav/Amale';
import Worldcup1 from './Comp/nav/Worldcup1';
import Cangresh from './Comp/nav/Cangresh';
import Prachanda from './Comp/nav/Prachanda';
import Kangresh from './Page/home/Kangresh';
import Gathbandan from './Page/home/Gathbandan';
import Sudar from './Page/home/Sudar';
import Gokul from './Page/home/Gokul';
import Bikash from './Page/home/Bikash';
import Conleftpic from './Page/home/Conleftpic';
import Pradesh from './Page/home/Bashe/Pradesh';

function App() {
  return (
    <>
     <Top/>
     <Nav/>
     
    
    
     <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="Grahapustha" element={<Grahapustha/>} />
        <Route path="Rajniti" element={<Rajniti/>} />
        <Route path="Samaj" element={<Samaj/>} />
        <Route path="Karobar" element={<Karobar/>} />
        <Route path="Kala" element={<Kala/>} />
        <Route path="Khel" element={<Khel/>} />
        <Route path="Bichar" element={<Bichar/>} />
        <Route path="Wolaga" element={<Wolaga/>} />
        <Route path="Bisesh" element={<Bisesh/>} />
        <Route path="Nirbachan" element={<Nirbachan/>} />
        <Route path="Worldcup" element={<Worldcup/>} />
        <Route path="Unicode" element={<Unicode/>} />
        <Route path="English" element={<English/>} />
        <Route path="Hadakada" element={<Hadakada/>} />
        <Route path="Sangraha" element={<Sangraha/>} />
        <Route path="Aam" element={<Aam/>} />
        <Route path="Nirbachan1" element={<Nirbachan1/>} />
        <Route path="Footbal" element={<Footbal/>} />
        <Route path="Amale" element={<Amale/>} />
        <Route path="Worldcup1" element={<Worldcup1/>} />
        <Route path="Cangresh" element={<Cangresh/>} />
        <Route path="Prachanda" element={<Prachanda/>} />
        <Route path="Kangresh" element={<Kangresh/>} />
        <Route path="Gathbandan" element={<Gathbandan/>} />
        <Route path="Sudar" element={<Sudar/>} />
        <Route path="Gokul" element={<Gokul/>} />
        <Route path="Bikash" element={<Bikash/>} />
        <Route path="Conleftpic" element={<Conleftpic/>} />
        <Route path="Pradesh" element={<Pradesh/>} />
        
        
       
      </Routes>

      <Footer/>
      
    </>
  );
}

export default App;
