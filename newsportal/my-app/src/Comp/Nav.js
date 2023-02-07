import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='d-flex'>
                        <div className=' flex-fill'>
                            <ul className='liststyle'>
                            <Link to="/Grahapustha"><li className='btn btn-primary'>गृहपृष्‍ठ</li></Link>
                            <Link to="/Rajniti"><li className='btn btn-primary'>राजनीति</li></Link>
                            <Link to="/Samaj"><li className='btn btn-primary'>समाज</li></Link>
                            <Link to="/Karobar"><li className='btn btn-primary'>कारोबार</li></Link>
                            <Link to="/Kala"><li className='btn btn-primary'>कला</li></Link>
                            <Link to="/Khel"><li className='btn btn-primary'>खेल</li></Link>
                            <Link to="/Bichar"> <li className='btn btn-primary'>विचार</li></Link>
                            <Link to="/Wolaga"><li className='btn btn-primary'>ब्लग</li></Link>
                            <Link to="/Bisesh"><li className='btn btn-primary'>विशेष</li></Link>
                            <Link to="/Nirbachan"><li className='btn btn-danger'>निर्वाचन</li></Link>
                            <Link to="/Worldcup"><li className='btn btn-warning'>विश्वकप</li></Link>
                            </ul>

                        </div>
                        <div className=' flex-fill'>
                            <ul className='liststyle leeft'>
                            <Link to="/Unicode"><li className='btn btn-primary'>युनिकोड</li></Link>
                            <Link to="/English"><li className='btn btn-primary'>ENGLISH</li></Link>
                            <Link to="/Hadakada"><li className='btn btn-primary'>हङकङ</li></Link>
                            <Link to="/Sangraha"><li className='btn btn-primary'>संग्रह</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <form class="d-flex search-box" role="search">
                <input class="form-control me-2 vit" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>

                <p className='line'></p>
            </section>

            <section>
               <div className=' ama text-center '>
                 <ul>
                 <Link to="/Aam"><li>#आम निर्वाचन–२०७९</li></Link>
                 <Link to="/Nirbachan1"><li>#निर्वाचन</li></Link>
                 <Link to="/Amale"><li>#एमाले</li></Link>
                 <Link to="/Worldcup1"><li>#विश्वकप</li></Link>
                 <Link to="/Cangresh"><li>#कांग्रेस</li></Link>
                 <Link to="/Prachanda"><li>#प्रचण्ड</li></Link>
                 
                 
                
                 </ul> 
               </div>
               <p className='line a'></p>
            </section>
        </>
    )
}

export default Nav
