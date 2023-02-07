import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


function Home() {
  let [fproduct, setFproduct]=useState([])
  useEffect(()=>{
axios.get('https://dummyjson.com/products')
.then(res => {
  console.log(res.data.products);
  setFproduct(res.data.products);
});

  },[])
  
  return (
    <>
      <section>
      
        <div className='text-center bux border border-dark '>
          <h1> <Link to="/Kangresh">कांग्रेस गण्डकी संसदीय दलको नेतामा <br></br><br></br>पाण्डे</Link></h1>
          
        </div>
      </section>


      <section>
        <div className='ad1 my-4'>
          <center><img src='https://nepalkhabar.prixacdn.net/media/advertisements/825_x_100_AOhPikW9vx.jpg'></img></center>

        </div>
      </section>

      <section>
        <div className='con2 '>
          <center>     <h1 className='my-5'><Link to="/Gathbandan">गठबन्धनले पाँच दिनमा सरकारका <br></br><br></br> न्यूनतम् साझा कार्यक्रम ल्याउने</Link></h1>
            <img className='img2 my-3' src='https://nepalkhabar.prixacdn.net/media/albums/rabi-lc-home-minister_ltRuYzkmiO.jpg'></img>

          </center>
        </div>
      </section>

      <section>
        <div>
          <center>
            <img className='my-4' src='https://nepalkhabar.prixacdn.net/media/advertisements/Nepalkhabar.com_825-100_Ax8qII5xnQ.gif'></img>
          </center>
        </div>
      </section>

      <section>
        <div className='con2 '>
          <center>     <h1 className='my-5'><Link to="/Sudar">सुदूरपश्चिममा गठबन्धनलाई नागरिक <br></br><br></br> उन्मुक्तिको अड्को, सरकार बनाउन सकस</Link></h1>
            <h5 className='fs-3'>रेशमको रिहाइका लागि दबाब बढाउँदै</h5>
          <p className='opacity-75 gocul'><Link to="/Gokul">गोकुल जोशी</Link></p>
            <img className='img3 my-3' src='https://nepalkhabar.prixacdn.net/media/albums/resham-chaudhary-nagarik-unmukti_wL75rwEHmY.jpg'></img>

          </center>
        </div>
      </section>

      <section>
        <div className='con3'>
          <center>     <h1 className='my-5'><Link to="/Bikash">विकास खर्चमा सरकार चुक्दा सिमेन्ट र<br></br><br></br>डन्डी बजारमा मन्दी</Link></h1>

            <img className='img4 my-3' src='https://nepalkhabar.prixacdn.net/media/albums/iron_steel-cement11_krhIZZjYH2.jpg'></img>

          </center>
        </div>
      </section>



      <section>


        <center>
          <img className='adv3' src='https://nepalkhabar.prixacdn.net/media/advertisements/Quick_Pyro_825x100_5KQdS698Oa.jpg'></img>
        </center>
{/*---------------------con4-------------------------------------------------------*/}
{fproduct.slice(0,1).map((a)=>(
        <div className='con4'>
          <div className='box4'>

            <div className="card " >
              <img src="https://nepalkhabar.prixacdn.net/media/albums/malaika_lSoAcNSAbh.gif.269x160_q100_crop.jpg" className="card-img-top" alt="..." />
              <div className='chi'>
                <h5>छिट्टै विवाह गर्दै ‘डिभोर्सी’ मलाइका</h5>
              </div>
            </div>



            <div className='sbux'>

              <div className='kar2 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

                <h6><Link to="/Conleftpic">निखिल र विराजसँग दुश्मनी छ भन्ने हल्ला फैलिएपछि आर्यनको स्पष्टीकरण</Link></h6>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

              <h6><Link to="/Conleftpic">नेपाली बजारमा आयो नयाँ प्रिमियम ह्विस्की ‘काला पत्थर’</Link></h6>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">संसार देख्न पाएपछि...</Link></h6></a>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

                <a href=''><h6><Link to="/Conleftpic">‘धनिराम’ बन्दै आर्यन</Link></h6></a>

              </div>

              <div className='kar2 b3s d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">बागमती माओवादी संसदीय दलको नेतामा ४ जनाको दाबी</Link></h6></a>

              </div>

              <div className='kar2 b3s d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">सेन्ट्रल जोन बिच भलिबलमा महिला र पुरुष दुवैमा नेपाललाई रजत</Link></h6></a>

              </div>
            </div>


          </div>



          <div className='box4'>
            {/*-----------------------------------------------------*/}
            <div>
              <div className='imgbox'>
                <img className='mimg'src={a.thumbnail}></img>
              </div>
              <p className='polygon'>  <span>  राजनीति</span></p>
              <a href=''><h5 className='eh1'><Link to="/Conleftpic">सरकारमा सहभागिताबारे निर्णय गर्न एकीकृत समाजवादीको बैठक बस्दै</Link></h5></a>
            </div>

            {/*-----------------------------------------------------*/}
            <div className='mbox'>
              <div className='imgbox'>
                <img className='mimg' src={a.thumbnail}></img>
              </div>
              <p className='polygon2 '>  <span>    बागमती</span></p>
              <a href=''><h5 className='eh1'><Link to="/Conleftpic">सरकारमा सहभागिताबारे निर्णय गर्न एकीकृत समाजवादीको बैठक बस्दै</Link></h5></a>
              <p className=' sunita fw-semibold'>सुनिता विष्ट</p>
            </div>

          </div>
          <div className='box4'>
            <p className='aa'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/250x2502_KM2riRcJpz.gif'></img></p>
            <p className='bb'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/2022_banner_300x200px_DRrbGXHgtu.png'></img></p>
            <p className='cc'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/300x200pixels_bjLFpGuUux.gif'></img></p>
            <p className='dd'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/9_Dec_2022-Blue-Bird-International-Clinic--W_300-x-H_200-px--For-Gif_ZS0tmAZcWJ.gif'></img></p>
          </div>


        </div>
        ))}
      </section>

      <section>
        <div>
          <center>
            <img className=' adv4' src='https://nepalkhabar.prixacdn.net/media/advertisements/Nepalkhabar.com_825-100_Ax8qII5xnQ.gif'></img>
          </center>
        </div>
      </section>
      {/*-------------khabar-----------------------------*/}
      <section >
      {fproduct.slice(0,1).map((a)=>(
        <div className='4col'>
          <p className='polygon'>  <span>  खबर</span></p>

          <div className="container">
            <div className="row">
              <div className="col"><div className='colbox'><img src={a.thumbnail}/> </div><a href><h6><Link to="/Conleftpic">निर्मलाको हत्यासम्बन्धी अनुसन्धानबारे गृहमन्त्रीलाई आईजीपीको ब्रिफिङ</Link></h6></a></div>
              <div className="col"><div className='colbox'><img src={a.thumbnail}/> </div><a href><h6><Link to="/Conleftpic">सांसदमा हारेका कमल थापा खेलमा फर्किएर जिते उपाधि</Link></h6></a></div>
              <div className="col"><div className='colbox'><img src={a.thumbnail}/></div><a href><h6><Link to="/Conleftpic">षडानन्द नगरपालिकाका मेयरको गाडी घरमा ठोक्कियो</Link></h6></a></div>
              <div className="col"><div className='colbox'><img src={a.thumbnail}/> </div><a href><h6><Link to="/Conleftpic">कता जालान् इन्जो फर्नान्डेज? भित्र्याउने दौडमा चार ठूला क्लब</Link></h6></a></div>
            </div>
            <div className="row">
              <div className="col"><div className='colbox'><img src={a.thumbnail}/> </div><a href><h6><Link to="/Conleftpic">सांसद किरण साहलाई सघाउनेको माग : धोका दिएर अन्तै लागे</Link></h6></a></div>
              <div className="col"><div className='colbox'><img src={a.thumbnail}/> </div><a href><h6><Link to="/Conleftpic">प्रधानमन्त्रीलाई नागरिक उन्मुक्तिको पत्र : तपाईंलाई समर्थन गर्‍यौँ</Link></h6></a></div>
              <div className="col"><div className='colbox'><img src={a.thumbnail}/> </div><a href><h6><Link to="/Conleftpic">दलीय आवरणका गुण्डागर्दीविरुद्ध निर्मम भएर कारवाही चलाउनू </Link></h6></a></div>
              <div className="col"><div className='colbox'><img src={a.thumbnail}/> </div><a href><h6><Link to="/Conleftpic">भक्तपुरबाट सरुवा भएर मनाङ हिँडेका सशस्त्रका जवान मर्स्याङ्दीमा बेपत्ता</Link></h6></a></div>
            </div>
          </div>

        </div>
        ))}
      </section>
      {/*-----------------bises--------------------------------------------*/}
      <div className='mathi parttwo'>
<p className='polygon bises1 my-5' >  <span>  प्रदेश</span></p>
<a href=''><h6 className='comment'><img className='comment2' src='https://as2.ftcdn.net/v2/jpg/01/09/34/83/1000_F_109348365_Z8PhLswPi5USmZxOyH31cpNVspCHfoD5.jpg'></img>विचार
<p className='line1'></p></h6>
</a>
</div>
      <section className='bises'>
      {fproduct.slice(0,1).map((a)=>( 
         <div className='con5'>


         <div className='box5 a bigpic'><p className='polygon smallbox' >  <span> राजनीति</span></p><h5 className='eh'><Link className='eh' to="/Conleftpic">ओली–प्रचण्डले एकीकृत समाजवादीलाई<br></br> किन बोलाएनन् सरकारमा?</Link></h5><p className='nepalkhabar'>नेपालखबर</p> <img className='bigpic' src={a.thumbnail}/></div>
         
         
         <div className='box5 b'>
            <div className='smallpic'><img className='bigpic' src={a.thumbnail}/></div>
            <p className='poly'>  समाज</p>
            <a href=''><h6><Link to="/Conleftpic">बदमासी गर्ने साहु,<br></br> जाहेरीकर्ताले नै निर्दोष भन्दा <br></br>पनि लालबहादुरलाई ३ करोड <br></br>बिगो</Link></h6></a>
            </div>


         <div className='box5  c'>
         <div className='smallpic'><img className='bigpic' src={a.thumbnail}/></div>
         <p className='poly bg-info'>    कारोबार
         </p>
         <a href=''><h6><Link to="/Conleftpic">महालेखा परीक्षक दंगालको <br></br> समय सकिँदै, शिशिर ढुंगानाले <br></br>पाउलान् नियुक्ति?</Link></h6></a>
         </div>


         <div className='box5  d'><div className='smallpic'><img className='bigpic' src={a.thumbnail}/></div>
            <p className='poly bg-success'>    राजनीति</p>
            <a href=''><h6><Link to="/Conleftpic">निकै ढिलो भैसकेको थियो<br></br> माधव नेपालले प्रधानमन्त्री  <br></br>दाबी गर्दा</Link></h6></a></div>


         <div className='box5 e'>
         <img className='' src='https://nepalkhabar.prixacdn.net/media/albums/Vladimir_Putin_and_Xi_Jinping__YafABe7ZJE.jpg.300x190_q100_crop.jpg'></img>
         <div className='con6'>
            <div className='box6 aa'><img  src={a.thumbnail}></img></div>
            <div className='box6 bb'><p><Link to="/Conleftpic">२०२२ का सबैभन्दा महत्वपूर्ण<br></br> तीन घटना, जो इतिहासमा <br></br>उल्लेखनीय हुनेछन्<br></br>
            बिल एमट</Link></p></div>
         </div>

         <div className='con6'>
         <div className='box6 aa'><img  src={a.thumbnail}></img></div>
         <div className='box6 bb'><p><Link to="/Conleftpic">भारतमाथिको प्रभाव यसरी 
        <br></br> गुमाउँदैछ चीन<br></br> अतुल कुमार</Link></p></div>
      </div>

      <div className='con6'>
      <div className='box6 aa'><img  src={a.thumbnail}></img></div>
      <div className='box6 bb'><p><Link to="/Conleftpic">२०२२ का सबैभन्दा महत्वपूर्ण  न्
      
      <br></br> तीन घटना, जो इतिहासमा<br></br>उल्लेखनीय हुनेछ<br></br>बिल एमट</Link> </p></div>
   </div>

   <img className='my-0' src='https://nepalkhabar.prixacdn.net/media/advertisements/300X200_2_tppYDH0Nhy_j3hFImD28I.gif'></img>
   <img className='my-1' src='https://nepalkhabar.prixacdn.net/media/advertisements/300x150_Kr6mniZvKW.gif'></img>

         </div>
         </div>
         ))}
      </section>

      
 {/*-----------------bises2--------------------------------------------*/}

 {fproduct.slice(0,1).map((a)=>(
<div className='mathi'>
<p className='polygon bises1 my-5' >  <span>  प्रदेश</span></p>
<ul>
 
<Link to="/Pradesh"><li>प्रदेश १</li></Link>
<Link to="/Pradesh"><li>मधेस</li></Link>
<Link to="/Pradesh"><li>बागमती</li></Link>
<Link to="/Pradesh"><li>गण्डकी</li></Link>
<Link to="/Pradesh"><li>लुम्बिनी</li></Link>
<Link to="/Pradesh"><li>कर्णाली</li></Link>
<Link to="/Pradesh"><li>सुदूरपश्चिम</li></Link>

</ul>

<a href=''><h6 className='comment'><img src='https://as1.ftcdn.net/v2/jpg/00/85/96/80/1000_F_85968033_NWCentG33F9mBpLP8exw9ZKNqxeH5DeJ.jpg'></img>सिफारिस <p></p></h6>
</a>
</div>
))}
     
      <section className='bises'>
      {fproduct.slice(0,1).map((a)=>(
         <div className='con5 bigpic'>


         <div className='box5 a'><p className='polygon smallbox' >  <span> राजनीति</span></p><h5><Link className='eh' to="/Conleftpic">ओली–प्रचण्डले एकीकृत समाजवादीलाई<br></br> किन बोलाएनन् सरकारमा?</Link></h5><p className='nepalkhabar'>नेपालखबर</p><img src={a.thumbnail}></img></div>
{/*---------------lower box-----------------------------------*/}
         
         <div className='box5 b bux2'>
            <div className='smallpic'><img src={a.thumbnail}></img></div>
            <p className='poly'>  समाज</p>
            <a href=''><h6><Link to="/Conleftpic">बागमती प्रदेश : मुख्यमन्त्रीको <br></br> दाबी पेश सोमबारसम्म गर्न <br></br>निर्देशन </Link> </h6></a>
            </div>


         <div className='box5  c bux2'>
         <div className='smallpic'><img src={a.thumbnail}></img></div>
         <p className='poly bg-info'>    कारोबार
         </p>
         <a href=''><h6><Link to="/Conleftpic">बिदा मनाउन मेयर  <br></br> बालेन्द्र बालीमा, २५ गते फर्कने </Link></h6></a>
         </div>


         <div className='box5  d bux2'><div className='smallpic'><img src={a.thumbnail}></img></div>
            <p className='poly bg-success'>    राजनीति</p>
            <a href=''><h6><Link to="/Conleftpic">प्रदेश १ : पाँच वर्षमा तीन <br></br> मुख्यमन्त्री र ३३ मन्त्री, अब   <br></br>बन्ला छरितो मन्त्रिमण्डल?</Link></h6></a></div>

{/*-------------------leftpiller-------------------------------*/}
         <div className='box5 e'>
         
         <div className='con6'>
            <div className='box6 bb'><p>प्रदेश राजधानीले सर्‍यो प्राविधिक शिक्षालय, विद्यार्थीलाई पढ्नदेखि डेरासम्मको समस्या</p></div>
         </div>

         <div className='con6'>
         <div className='box6 bb'><p>रविनालाई माया गर्न हरिवंशलाई गाली गर्नुपर्छ र?</p></div>
      </div>

      <div className='con6'>
      <div className='comment'><h6></h6></div>
      
      <div className='box6 bb'><p>विवादै विवादको भूमरीमा नेपाल टी २० लिग क्रिकेट</p></div>
   </div>

   <div className='con6'>
      <div className='comment'><h6></h6></div>
      
      <div className='box6 bb'><p>रोकिएन हात्तीको आक्रमणबाट ज्यान गुमाउने क्रम, विज्ञ भन्छन्- मान्छेले नै बानी सुधार्नुपर्छ</p></div>
   </div>

   <div className='con6'>
      <div className='comment'><h6></h6></div>
      
      <div className='box6 bb'><p>प्रदेश १ का सांसदको तलब सुविधा केन्द्रको भन्दा बढी!</p></div>
   </div>

   <div className='con6'>
      <div className='comment'><h6></h6></div>
      
      <div className='box6 bb'><p>देउवाको सन्देश प्रचण्डसम्म पुगेकै थिएन?</p></div>
   </div>

   <div className='con6'>
   <div className='comment'><h6></h6></div>
   
   <div className='box6 bb'><p>काठमाडौं–केरुङ रेलमार्ग : नयाँ वर्षबाट यसरी हुँदै छ  विस्तृत अध्ययन</p></div>
</div>

   <img className='my-0' src='https://nepalkhabar.prixacdn.net/media/advertisements/300-300_im1AQQGHKY.gif'></img>
  

         </div>
         </div>
         ))}
      </section>

      <section>
      <div>
        <center>
          <img className='my-4' src='https://adalytics.prixacdn.net/media/albums/825-x-100--nepalkhabar_1_sLWKcWGo3Z.gif'></img>
        </center>
      </div>
    </section>

    <section> 
    
      <div className='mainbox'>
      <div className='toplogo'>
      <img src='https://cdn-icons-png.flaticon.com/512/5968/5968852.png'></img>
      <h6>nepal <span>khabar</span>.tv</h6>
      <p className='line3'></p>
      </div>
{/*-------------------------youtube------------------*/}
        <div className='subbuxcontainer'>
        <div className='subbox left1'><iframe className='left1' src='https://www.youtube.com/embed/ncAuiD0_3zM'></iframe></div>

{/*-------------------------------------------*/}        
        <div className='subbox right1'>
          <div className='rightsubcontainer border-bottom'>

            <div className='left4'><img src='https://img.youtube.com/vi/ncAuiD0_3zM/0.jpg'></img></div>
            <div className='right4'><p>सत्ता गठबन्धनको संयोजकमा केपी ओली, पाँच दिनमा न्यूनतम साझा कार्यक्रम तय गरिने</p></div> 

          </div>
          <div className='rightsubcontainer border-bottom'>
          <div className='left4'><img src='https://img.youtube.com/vi/axg3ayPksOg/0.jpg'></img></div>
          <div className='right4'><p>प्रधानमन्त्री प्रचण्ड–ओली भेट, के–के कुरा भयो?</p></div> 
          </div>
          <div className='rightsubcontainer '>
          <div className='left4'><img src='https://img.youtube.com/vi/RFheCXrMw64/0.jpg'></img></div>
          <div className='right4'><p>सत्ता गठबन्धनको संयोजकमा केपी ओली, पाँच दिनमा न्यूनतम साझा कार्यक्रम तय गरिने</p></div>
    {/*-------------------------------------------*/}        
          </div>
        </div>
        </div>
      </div>
     
    </section>

    <section>
    <div>
      <center>
        <img className=' adv2' src='https://adalytics.prixacdn.net/media/albums/825-x-100--nepalkhabar_1_sLWKcWGo3Z.gif'></img>
      </center>
    </div>
  </section>



   {/*--------------------------------------------*/}





   <section>


   <p className='polygon karobar ' >  <span>  कारोबार</span></p>    
{/*---------------------con4-------------------------------------------------------*/}


{fproduct.slice(0,1).map((a)=>(

        <div className='con4'>
          <div className='box4'>

            <div className="card " >
              <img src="https://nepalkhabar.prixacdn.net/media/albums/news/Gold_11_PCvc5oxGTk.jpg.269x160_q100_crop.jpg" className="card-img-top" alt="..." />
              <div className='chi'>
                <h5>बढ्यो सुनको भाउ, चाँदीको घट्यो</h5>
              </div>
            </div>



            <div className='sbux'>

              <div className='kar2 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

                <a href=''><h6><Link to="/Conleftpic">निखिल र विराजसँग दुश्मनी छ भन्ने हल्ला फैलिएपछि आर्यनको स्पष्टीकरण</Link></h6></a>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

                <a href=''><h6><Link to="/Conleftpic">नेपाली बजारमा आयो नयाँ प्रिमियम ह्विस्की ‘काला पत्थर’</Link></h6></a>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">संसार देख्न पाएपछि...</Link></h6></a>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

                <a href=''><h6><Link to="/Conleftpic">‘धनिराम’ बन्दै आर्यन</Link></h6></a>

              </div>

              <div className='kar2 b3s d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">बागमती माओवादी संसदीय दलको नेतामा ४ जनाको दाबी</Link></h6></a>

              </div>

              <div className='kar2 b3s d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">सेन्ट्रल जोन बिच भलिबलमा महिला र पुरुष दुवैमा नेपाललाई रजत</Link></h6></a>

              </div>
            </div>


          </div>



          <div className='box4'>

          
            {/*-----------------------------------------------------*/}


            <div>
              <div className='imgbox'>
                <img className='mimg' src={a.thumbnail}></img>
              </div>
              <p className='polygon'>  <span>  राजनीति</span></p>
              <a href=''><h5 className='eh1 my-2'><Link to="/Conleftpic">पेट्रोलियम पदार्थको मूल्य घटाउन प्रधानमन्त्री प्रचण्डको निर्देशन</Link></h5></a>
            </div>

            {/*-----------------------------------------------------*/}
            <div className='mbox secondmbox'>
              <div className='left3 managerbox'><div className='littlebox'><img className='leftimg' src={a.thumbnail}></img></div>
              <a href=''><h6><Link to="/Conleftpic">बीएमडब्लु आई भिजन डी : जसले बदल्छ मालिकको ‘मूड’अनुसार आफ्नो स्वरूप</Link></h6></a>
              </div>
              <div className='right3 managerbox'><div className='littlebox'><img className='rightimg' src={a.thumbnail}></img></div>
              <a href=''><h6 className='righth6'><Link className='down' to="/Conleftpic">अर्थ र राजस्व सचिव हेरफेर</Link></h6></a></div>
            </div>

          </div>
          <div className='box4'>
            <p className='aa'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/250x2502_KM2riRcJpz.gif'></img></p>
            <p className='bb'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/2022_banner_300x200px_DRrbGXHgtu.png'></img></p>
            <p className='cc'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/300x200pixels_bjLFpGuUux.gif'></img></p>
            
          </div>


        </div>
        ))}
      </section>


{/*----------------khel-------------------------*/}




<section className='khel'>


   <p className='polygon karobar ' >  <span>  खेल</span></p>    
{/*---------------------con4-------------------------------------------------------*/}




        <div className='con4'>
          <div className='box4'>

            <div className="card " >
              <img src="https://nepalkhabar.prixacdn.net/media/albums/janakpur-lumbini2_YzQoKTJDQh.png.370x245_q70_crop.jpg" className="card-img-top" alt="..." />
              <div className='chi'>
                <h5>ग्रिफ्तको अलराउण्ड प्रदर्शनमा जनकपुरद्वारा लुम्बिनी २३ रनले पराजित</h5>
              </div>
            </div>


            {fproduct.slice(0,1).map((a)=>(
            <div className='sbux leftfrst'>

              <div className='kar2  d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

                <a href=''><h6><Link to="/Conleftpic">साफ यू–२० महिला च्याम्पियनसिप : ३० सदस्यीय टोली घोषणा
                </Link></h6></a>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

                <a href=''><h6><Link to="/Conleftpic">म्यानचेस्टर सिटीले चेल्सीलाई हरायो, उपाधि होडमा आर्सनललाई दबाब</Link></h6></a>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">म्यानचेस्टरद्वारा चेल्सी पराजित</Link></h6></a>

              </div>
              <div className='kar2 b3 d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />

                <a href=''><h6><Link to="/Conleftpic">प्रतिबन्ध झेल्दै रोनाल्डो, अल नसारमा अझै दुई साता खेल्न पाउने छैनन्</Link></h6></a>

              </div>

              <div className='kar2 b3s d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">टी २० लिगमा फारवेष्ट युनाइटेडको दोस्रो जित दर्ता</Link></h6></a>

              </div>

              <div className='kar2 b3s d-flex flex-row'>

                <img src={a.thumbnail} className="card-img-top" alt="..." />
                <a href=''><h6><Link to="/Conleftpic">आहा रारा गोल्डकप उपाधिका लागि संकटा र बीवाइएससी भिड्ने</Link></h6></a>

              </div>
            </div>
            ))}


          </div>

          {fproduct.slice(0,1).map((a)=>(

          <div className='box4'>

          
            {/*-----------------------------------------------------*/}


            <div>
              <div className='imgbox'>
                <img className='mimg' src={a.thumbnail}></img>
              </div>
             
              <a  href=''><h5 className='eh1 my-3'><Link to="/Conleftpic">कलंकको अर्को भारी बोक्दै क्यान</Link></h5></a>
            </div>

            {/*-----------------------------------------------------*/}
            <div className='mbox secondmbox'>
              <div className='left3 managerbox'><div className='littlebox'><img className='leftimg' src={a.thumbnail}></img></div>
              <a href=''><h6 className='my-5'><Link to="/Conleftpic">एन्फाले बढायो ए डिभिजन लिग तयारीको रकम, ११ क्लबले भरे इन्ट्री फारम</Link></h6></a>
              </div>
              <div className='right3 managerbox'><div className='littlebox'><img className='rightimg'src={a.thumbnail}></img></div>
              <a href=''><h6 className='righth6 my-'><Link to="/Conleftpic">क्यानका पदाधिकारी र खेलाडीलाई सीआईबीले बोलाएर थाल्यो सोधपुछ</Link></h6></a></div>
            </div>

          </div>
          ))}
          <div className='box4'>
            <p className='aa'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/250x2502_KM2riRcJpz.gif'></img></p>
            <p className='bb'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/2022_banner_300x200px_DRrbGXHgtu.png'></img></p>
            <p className='cc'><img src='https://nepalkhabar.prixacdn.net/media/advertisements/300x200pixels_bjLFpGuUux.gif'></img></p>
            
          </div>


        </div>
      </section>

    </>
  )
}

export default Home

