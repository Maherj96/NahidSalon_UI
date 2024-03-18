import logo from './logo.svg';

import './App.css';
import Fade from 'react-bootstrap/Fade';
import { useState } from 'react';
import { Container } from 'react-bootstrap';




function App() {

  const [data,setData] = useState([]);
  const [dates,setDates] = useState([]);
  const [times,setTimes] = useState([]);
  

  function getDates(){

    fetch('https://localhost:7178/v1/GetDates',{method: 'GET'})
    .then(response => response.json())
    .then(data => setDates(data))
    .catch(error => console.error(error));
    
  }

  function getTimes(){

    fetch('https://localhost:7178/v1/GetTimes',{method: 'GET'})
    .then(response => response.json())
    .then(data => setTimes(data))
    .catch(error => console.error(error));
    
  }
  

  function showServices(){
    document.getElementById("services").style.display = "block"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"





    
  }
  function showHome(){
    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "block"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"





  }
  function showGallary(){
    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "block"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"





  }
  function showBookAppointment(){
    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "block"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"





 
  }

  async function sendPhoneNumber(phonenumber){
    console.log(phonenumber);
    fetch('https://localhost:7178/v1/PhoneVerify?phoneNumber='+ phonenumber,{method: 'POST'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    //https://localhost:7178/v1/PhoneVerify?phoneNumber=
  

 

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "block"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"





    
  }
  function chooseService(accesscode){
    console.log(accesscode);
    fetch('https://localhost:7178/v1/VerifyCodeAndContinue?code='+ accesscode,{method: 'POST'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "block"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"




  }
  function selectHaircut(){
    
    fetch('https://localhost:7178/v1/ChooseServiceCategory?service=Haircut',{method: 'POST'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "block"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"




    getServices();
    
  }
  function selectHairColor(){
    
    fetch('https://localhost:7178/v1/ChooseServiceCategory?service=Hair%20Color',{method: 'POST'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "block"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"




    getServices();
    
  }
  function selectHairStyling(){
    
    fetch('https://localhost:7178/v1/ChooseServiceCategory?service=Hair%20Styling',{method: 'POST'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "block"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"




    getServices();
    
  }
  function selectHairTreatments(){
   
    fetch('https://localhost:7178/v1/ChooseServiceCategory?service=Hair%20Treatments',{method: 'POST'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "block"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"




    getServices();
    
  }
  function selectCurls(){
    
    fetch('https://localhost:7178/v1/ChooseServiceCategory?service=Curls',{method: 'POST'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "block"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"





    getServices();
    
  }
  function getServices(){
    
    fetch('https://localhost:7178/v1/GetServices',{method: 'GET'})
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
    
  }
  function selectServices(service){
    
    fetch('https://localhost:7178/v1/ChooseHaircut?service'+service,{method: 'POST'})
    .then(response => response.json())
    .catch(error => console.error(error));

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "block"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"



    getDates();
    
  }
  function selectDate(date){
    
    fetch('https://localhost:7178/v1/ChooseDate?date='+date,{method: 'POST'})
    .then(response => response.json())
    .catch(error => console.error(error));
    fetch('https://localhost:7178/v1/ChooseDate?date='+date,{method: 'POST'})
    .then(response => response.json())
    .catch(error => console.error(error))
    

    getTimes();
    getTimes();
    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "block"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "none"
    
    
  }
  function selectTime(time){
    
    fetch('https://localhost:7178/v1/ChooseTime?time='+time,{method: 'POST'})
    .then(response => response.json())
    .catch(error => console.error(error));
    
    

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "block"
    document.getElementById("confirmation").style.display = "none"


    
    
  }

  function confirmAppt(){
    
    fetch('https://localhost:7178/v1/confirmAppt',{method: 'POST'})
    .then(response => response.json())
    .catch(error => console.error(error));
    
    

    document.getElementById("services").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("Gallary").style.display = "none"
    document.getElementById("BookAppointment").style.display = "none"
    document.getElementById("EnterAccessCode").style.display = "none"
    document.getElementById("chooseService").style.display = "none"
    document.getElementById("Service").style.display = "none"
    document.getElementById("buttonrow").style.display = "none"
    document.getElementById("chooseDate").style.display = "none"
    document.getElementById("chooseTime").style.display = "none"
    document.getElementById("confirmAppt").style.display = "none"
    document.getElementById("confirmation").style.display = "block"

    
    
  }

 
  return (
    <div  className="App">
            <button class="btn btn-transparent border-dark float-end btn-lg me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></button>

      <div class="fade-inNav">
      <nav class=" navbar navbar-expand-lg navbar-light mt-5 ms-5">
      <a Style="font-size: 40px;" class=" navbar-brand text-dark" href="#">Nahid's Hair Services</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    
    </div>
    

    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasRightLabel">Menu</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  
   
  <h2 class="mb-3 mt-5" data-bs-dismiss="offcanvas" onClick={()=>showHome()}>Home</h2>

  <h2 class="mb-3" data-bs-dismiss="offcanvas"  onClick={()=>showServices()}>Services</h2>

  <h2 class="mb-3" data-bs-dismiss="offcanvas"  onClick={()=>showBookAppointment()}>Book Appointment</h2>

  <h2 class="mb-3" data-bs-dismiss="offcanvas"  onClick={()=>showGallary()}>Location</h2>

  
  <h2 class="mb-3" data-bs-dismiss="offcanvas"  onClick={()=>showGallary()}>Gallary</h2>

  
  </div>
</div>

    
    <div id ="home" >
      <div class="fade-in">
      <div className='row'>
      <div className='col-6'>

      <div class=" m-4 p-5  bg-transparent "  Style="height: 450px;" >
        <h3>Welcome to Nahid's Hair Services!</h3>
          <p className='text-dark p-1'>

Are you seeking a hair stylist who understands the unique needs and desires of each client? Look no further! I'm Nahid, and I'm passionate about helping you look and feel your absolute best.

Located conveniently at 2059 Scenic Hwy N Suite 107, Snellville, GA 30078, inside Ulta, Nahid's Hair Services is your go-to destination for all your hair care needs. With years of experience and a commitment to excellence, I offer a wide range of services tailored to suit your individual style and preferences.

Whether you're in need of a fresh haircut, a vibrant color transformation, or a sleek new hairstyle for a special occasion, I've got you covered. My goal is to not only enhance your natural beauty but also to provide you with an unforgettable salon experience.

At Nahid's Hair Services, you can expect personalized attention, top-notch professionalism, and results that exceed your expectations. Your satisfaction is my priority, and I'll work closely with you to ensure that you leave feeling confident and radiant every time.

Join me at Nahid's Hair Services and let's embark on a journey to discover your perfect look together. Schedule your appointment today and let's make your hair dreams a reality!</p>

         </div>
       
    </div>
    <div class="container w-50 mb-5">
      <img src = "https://static01.nyt.com/images/2023/03/28/fashion/28hair-promo-new/28hair-promo-new-videoSixteenByNine3000.jpg" className='w-100 h-100'/>
  
</div>
       
      </div>
      </div>
      
</div>
    

    <div id ="services" Style="display:none
                                    " >
    <div class="fade-in float-center">
        <div className='row p-2'>
        <div class="card border-dark m-3 p-3 bg-transparent " Style="width: 90rem;height: 20rem;">
          <div className='row h-100'>
          <div className='col-auto'>
          <img Style="background-color: rgba(255, 255, 255, .3);height:280px; width:340px" class="card-img-top" src="https://peteandpedro.com/cdn/shop/articles/0_Featured_Haircuts_For_Men_1024x1024.jpg?v=1668875982" alt="Card image cap"/>

          </div>
          <div className='col-lg'>
            <h3>Men's Haircut</h3>
            <p className='mt-5'>Our men's haircut service at Nahid's Hair Services offers precision cuts tailored to your unique style and preferences. Whether you're looking for a classic, timeless look or a modern, edgy style, our experienced stylists are here to deliver. With attention to detail and expertise in the latest techniques, we ensure a clean, polished finish every time. Trust us to enhance your appearance and leave you feeling confident and refreshed. Schedule your appointment today and step into a world of personalized grooming excellence.</p>
            <button  class="btn btn-outline-dark mt-5"  onClick={()=>showBookAppointment()} Style="background-outline:black">Go to Book Appointments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>

          </div>

        </div>
        </div>
        <div class="card border-dark m-3 p-3 bg-transparent " Style="width: 90rem;height: 20rem;">
          <div className='row h-100'>
          <div className='col-auto'>
          <img Style="background-color: rgba(255, 255, 255, .3);height:280px; width:340px" class="card-img-top" src="https://dapperanddivinestudio.com/wp-content/uploads/2019/02/women%E2%80%99s-haircut-2.jpg" alt="Card image cap"/>

          </div>
          <div className='col-lg'>
            <h3>Woman's Haircut</h3>
            <p className='mt-5'>Discover the perfect blend of style and sophistication at Nahid's Hair Services. Our women's haircut service offers tailored cuts designed to enhance your natural beauty and individuality. From chic bobs to flowing layers, our skilled stylists will create a look that complements your unique features and lifestyle. Step into our salon and let us transform your hair into a stunning expression of your personality. Book your appointment today and experience the ultimate in personalized hair care.</p>
            <button class="btn btn-outline-dark mt-5"  onClick={()=>showBookAppointment()} Style="background-outline:black">Go to Book Appointments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>

          </div>

          </div>
        </div>
        <div class="card border-dark m-3 p-3 bg-transparent " Style="width: 90rem;height: 20rem;">
          <div className='row h-100'>
          <div className='col-auto'>
          <img Style="background-color: rgba(255, 255, 255, .3);height:280px; width:340px" class="card-img-top" src="https://thevipbarber.com/wp-content/uploads/2021/09/8-curso.de_.barbeiro_95127759_371497253766755_7161981912719788012_n-680x680-1.jpg" alt="Card image cap"/>

          </div>
          <div className='col-lg'>
            <h3>Kid's Haircut</h3>
            <p className='mt-5'>At Nahid's Hair Services, we make haircuts fun and easy for your little ones! Our kids' haircut service offers a playful and friendly environment where children can feel comfortable and relaxed. Whether it's their first haircut or a regular trim, our experienced stylists will work patiently to create a style that suits their personality and preferences. With gentle care and attention to detail, we'll leave your child looking and feeling their best. Bring your little ones to Nahid's Hair Services for a hassle-free haircut experience they'll love. Schedule their appointment today and let the smiles begin!</p>
            <button class="btn btn-outline-dark mt-5"  onClick={()=>showBookAppointment()} Style="background-outline:black">Go to Book Appointments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>

          </div>

          </div>
        </div>
        <div class="card border-dark m-3 p-3 bg-transparent " Style="width: 90rem;height: 20rem;">
          <div className='row h-100'>
          <div className='col-auto'>
          <img Style="background-color: rgba(255, 255, 255, .3);height:280px; width:340px" class="card-img-top" src="https://www.realsimple.com/thmb/No6PG-h8Or4qaeAUHqmxym6mgNU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/highlights-every-hair-color-2000-3ef162fac0234161a184c0d370717914.jpg" alt="Card image cap"/>

          </div>
          <div className='col-lg'>
            <h3>Highlight</h3>
            <p className='mt-5'>Elevate your look with gorgeous highlights at Nahid's Hair Services. Our highlight service offers a touch of brightness and dimension to your hair, enhancing your natural beauty and adding depth to your style. Whether you prefer subtle sun-kissed strands or bold, statement-making highlights, our expert stylists will create a customized look that complements your skin tone and personal aesthetic. Using the latest techniques and premium products, we'll ensure seamless blending and stunning results every time. Revitalize your hair and ignite your confidence with highlights from Nahid's Hair Services. Schedule your appointment today and shine brighter than ever before!</p>
            <button class="btn btn-outline-dark mt-3"  onClick={()=>showBookAppointment()} Style="background-outline:black">Go to Book Appointments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>

          </div>

          </div>
        </div>
        
        <div class="card border-dark m-3 p-3 bg-transparent " Style="width: 90rem;height: 20rem;">
          <div className='row h-100'>
          <div className='col-auto'>
          <img Style="background-color: rgba(255, 255, 255, .3);height:280px; width:340px" class="card-img-top" src="https://cdn-bjfha.nitrocdn.com/EzcQtwiBVoAQjOfXvaaHKtwTZOGljkZF/assets/static/optimized/wp-content/uploads/2021/08/89c37f8f223efc1a70cc9fba29b9824e.shutterstock_1935834610.jpg" alt="Card image cap"/>

          </div>
          <div className='col-lg'>
            <h3>Perm</h3>
            <p className='mt-5'>Transform your hair with beautiful curls and waves at Nahid's Hair Services. Our perm service offers a convenient and long-lasting solution for adding volume and texture to your locks. Whether you desire loose, beachy waves or tight, defined curls, our skilled stylists will customize the perfect perm to suit your unique style and preferences. With top-quality products and precise techniques, we'll create a stunning, low-maintenance look that lasts. Say goodbye to flat, lifeless hair and hello to effortless beauty with a perm from Nahid's Hair Services. Book your appointment today and embrace your gorgeous new hairstyle!</p>
            <button class="btn btn-outline-dark mt-3"  onClick={()=>showBookAppointment()} Style="background-outline:black">Go to Book Appointments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>

          </div>

          </div>
        </div>
        <div class="card border-dark m-3 p-3 bg-transparent " Style="width: 90rem;height: 20rem;">
          <div className='row h-100'>
          <div className='col-auto'>
          <img Style="background-color: rgba(255, 255, 255, .3);height:280px; width:340px" class="card-img-top" src="https://tenajsaloninstitute.edu/wp-content/uploads/2020/12/Beauty-Fashion-Model-Girl-with.jpg" alt="Card image cap"/>

          </div>
          <div className='col-lg'>
            <h3>Coloring</h3>
            <p className='mt-5'>Transform your hair with vibrant color at Nahid's Hair Services. Our coloring service offers endless possibilities for expressing your unique style and personality. Whether you're craving a bold new hue, subtle highlights, or a sophisticated balayage, our skilled colorists will work with you to create a customized look that complements your skin tone and features. Using only the highest quality hair color products, we'll ensure stunning, long-lasting results with minimal damage to your hair. From rich brunettes to vibrant blondes and everything in between, trust Nahid's Hair Services to bring your hair color dreams to life. Schedule your appointment today and let your true colors shine!</p>
            <button class="btn btn-outline-dark mt-3"  onClick={()=>showBookAppointment()} Style="background-outline:black">Go to Book Appointments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>

          </div>

          </div>
        </div>
        <div class="card border-dark m-3 p-3 bg-transparent " Style="width: 90rem;height: 20rem;">
          <div className='row h-100'>
          <div className='col-auto'>
          <img Style="background-color: rgba(255, 255, 255, .3);height:280px; width:340px" class="card-img-top" src="https://media1.popsugar-assets.com/files/thumbor/zfpCJRqxiUPbvGnUuh2hkquIpcw=/519x651:3117x3249/fit-in/792x1188/filters:format_auto():upscale()/2023/04/07/798/n/1922153/452debc764305c96457cf4.35427848_.jpg" alt="Card image cap"/>

          </div>
          <div className='col-lg'>
            <h3>Formal</h3>
            <p className='mt-5'>Elevate your look for any special occasion with formal hairstyling at Nahid's Hair Services. Whether you're attending a wedding, prom, or gala event, our skilled stylists will create an elegant and sophisticated hairstyle that perfectly complements your outfit and showcases your natural beauty. From timeless updos to glamorous curls and sleek chignons, we'll work with you to design a customized look that makes you feel confident and glamorous. With attention to detail and precision styling techniques, we'll ensure your hair stays flawless throughout the entire event. Trust Nahid's Hair Services to create the perfect formal hairstyle for your unforgettable moments. Schedule your appointment today and step into the spotlight with confidence!</p>
            <button class="btn btn-outline-dark mt-3"  onClick={()=>showBookAppointment()} Style="background-outline:black">Go to Book Appointments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>

          </div>

          </div>
        </div>
        <div class="card border-dark m-3 p-3 bg-transparent " Style="width: 90rem;height: 20rem;">
          <div className='row h-100'>
          <div className='col-auto'>
          <img Style="background-color: rgba(255, 255, 255, .3);height:280px; width:340px" class="card-img-top" src="https://cdn.shopify.com/s/files/1/0053/7929/3230/files/IMG_5282_600x600.jpg?v=1633515502" alt="Card image cap"/>

          </div>
          <div className='col-lg'>
            <h3>Silk Press</h3>
            <p className='mt-5'>Experience the ultimate in sleek and smooth hair with a silk press at Nahid's Hair Services. Our silk press service offers a luxurious and long-lasting straightening treatment that leaves your hair looking and feeling silky soft. Using professional-grade tools and techniques, our skilled stylists will transform your natural texture into a sleek and glossy finish without the use of harsh chemicals. Say goodbye to frizz and hello to effortlessly beautiful hair that moves with grace and ease. Treat yourself to the luxury of a silk press at Nahid's Hair Services and unlock your hair's true potential. Schedule your appointment today for hair that shines with radiance!</p>
            <button class="btn btn-outline-dark mt-3"  onClick={()=>showBookAppointment()} Style="background-outline:black">Go to Book Appointments <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>

          </div>

          </div>
        </div>
        </div>
      
        </div>
    </div>
    <div id ="Gallary" class="border-dark"  Style="display:none" >
      <div class="fade-in">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="container d-flex align-items-center justify-content-center w-50">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://divadivinehair.com/cdn/shop/articles/033d7950b7f95a3b91f06e8760dbf101.jpg?v=1608471197&width=2048" class="d-block h-75" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://divadivinehair.com/cdn/shop/articles/033d7950b7f95a3b91f06e8760dbf101.jpg?v=1608471197&width=2048" class="d-block w-75" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://divadivinehair.com/cdn/shop/articles/033d7950b7f95a3b91f06e8760dbf101.jpg?v=1608471197&width=2048" class="d-block w-75" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
      
      

    </div>

    <div id ="BookAppointment" class="border-dark"  Style="display:none" >
      <div  class ="fade-in">
      <div class ="container h-50 mt-5">
      <h3>So let's get started! What is your phone number?</h3>
      <div class ="row">
        <div className='col-lg text-center'>
        <textarea class="w-25" id="phonenumber"></textarea>
        </div>
        <div class ="row text-center">
        <div className='col-sm text-end'>
               </div>
        <div className='col-sm text-start'>
        <button onClick={()=>sendPhoneNumber(document.getElementById('phonenumber').value)}type="button"  class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>        </div>
        
        </div>
      </div>
      
      </div>
      </div>
        
      

    </div>

    <div id ="EnterAccessCode" class="border-dark"  Style="display:none" >
      <div  class ="fade-in">
      <div class ="container h-50 mt-5">
      <h3>You should've gotten an access code, what is it?</h3>
      <div class ="row">
        <div className='col-lg text-center'>
        <textarea class="w-25" id="accesscode"></textarea>
        </div>
        <div class ="row text-center">
        <div className='col-sm text-end'>
        <button onClick={()=>showBookAppointment()}type="button"  class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></button>        </div>
        <div className='col-sm text-start'>
        <button onClick={()=>chooseService(document.getElementById('accesscode').value)}type="button"  class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>        </div>
        
        </div>
      </div>
      
      </div>
      </div>
        
      

    </div>

    <div id ="chooseService" class="border-dark"  Style="display:none" >
      <div  class ="fade-in">
      <div class ="container h-50 mt-5">
      <h3>What service category would you like to get done?</h3>
      <div class ="row">
        <div className='col-lg text-center'>
       
        <div class="dropdown">
  <button class="btn btn-transparent border-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose a Service Category
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" onClick={()=>selectHaircut()}>Haircut</a>
    <a class="dropdown-item" onClick={()=>selectHairColor()}>Hair Color</a>
    <a class="dropdown-item" onClick={()=>selectHairStyling()}>Hair Styling</a>
    <a class="dropdown-item" onClick={()=>selectHairTreatments()}>Hair Treatments</a>
    <a class="dropdown-item" onClick={()=>selectCurls()}>Curls</a>
    
  </div>
</div>
        </div>
        <div id='buttonrow' class ="row text-center">
        <div className='col-sm text-end'>
        <button onClick={()=>sendPhoneNumber()}type="button"  class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></button>        </div>
        <div className='col-sm text-start'>
        <button onClick={()=>chooseService()}type="button"  class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button>        </div>
        
        </div>
      </div>
      
      </div>
      </div>
        
      

    </div>

    <div id ="Service" class="border-dark"  Style="display:none" >
      <div  class ="fade-in">
      <div class ="container h-50 mt-5">
      <h3>What service would you like to get done?</h3>
      <div class ="row">
        <div className='col-lg text-center'>
       
        <div class="dropdown">
  <button class="btn btn-transparent border-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose a Service
  </button>
  
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {data.map(item => (
        <a class="dropdown-item" onClick={()=>selectServices(item)} key={item}>{item}</a>
      ))}
    
  </div>
</div>
        </div>
        
      </div>
      
      </div>
      </div>
        
      

    </div>

    <div id ="chooseDate" class="border-dark"  Style="display:none" >
      <div  class ="fade-in">
      <div class ="container h-50 mt-5">
      <h3>What date works best for you?</h3>
      <div class ="row">
        <div className='col-lg text-center'>
       
        <div class="dropdown">
  <button class="btn btn-transparent border-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose a Date
  </button>
  
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {dates.map(item => (
        <a class="dropdown-item" onClick={()=>selectDate(item)} key={item}>{item}</a>
      ))}
    
  </div>
</div>
        </div>
        
      </div>
      
      </div>
      </div>
        
      

    </div>

    <div id ="chooseTime" class="border-dark"  Style="display:none" >
      <div  class ="fade-in">
      <div class ="container h-50 mt-5">
      <h3>What time works best for you?</h3>
      <div class ="row">
        <div className='col-lg text-center'>
       
        <div class="dropdown">
  <button class="btn btn-transparent border-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose a Time
  </button>
  
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {times.map((item,index) => (
        <a class="dropdown-item" onClick={()=>selectTime(index)} key={item}>{item}</a>
      ))}
    
  </div>
</div>
        </div>
        
      </div>
      
      </div>
      </div>
        
      

    </div>

    <div id ="confirmAppt" class="border-dark"  Style="display:none" >
      <div  class ="fade-in">
      <div class ="container h-50 mt-5">
      <h3>You are good to go! Want to confirm?</h3>
      <div class ="row">
        <div className='col-lg text-center'>
       
        <div class="dropdown">
  <button class="btn btn-dark text-light " onClick={()=>confirmAppt()} type="button" >
    Confirm Appointment
  </button>
  
</div>
        </div>
        
      </div>
      
      </div>
      </div>
        
      

    </div>

    <div id ="confirmation" class="border-dark"  Style="display:none" >
      <div  class ="fade-in">
      <div class ="container h-50 mt-5">
      <h3>Congrats! You are locked in! You should've received a text confirmation! See you soon!</h3>
      <div class ="row">
        <div className='col-lg text-center'>
       
        <div class="dropdown">
  <button class="btn btn-dark text-light " onClick={()=>showHome()} type="button" >
    Back to home
  </button>
  
</div>
        </div>
        
      </div>
      
      </div>
      </div>
        
      

    </div>



    
    <hr Style="margin: auto;" className='w-75 border border-dark mt-5 mb-2' ></hr>
  
    <div class = "fade-inNav">
    <div className='text-center'>
      
    <button onClick={()=>{window.location.href="mailto:suraiyanahid74@icloud.com"}}  type="button" class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></button>
    <button onClick={()=>{window.location.href="https://www.facebook.com/"}} type="button" class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></button>
    <button onClick={()=>{window.location.href="https://www.instagram.com/"}}type="button" class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></button>
    <button onClick={()=>{window.location.href="https://www.tiktok.com/en/"}}type="button"  class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg></button>
    </div>
    <h6 className='mt-3'> Phone number: 770-912-1009</h6>
    <h6> Address: 2059 Scenic Hwy N Suite 107, Snellville, GA 30078 Inside Ulta</h6>
    
    <p> Created by Maher Jahan</p>
    </div>
    </div>
  );
}

export default App;
