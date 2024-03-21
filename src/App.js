import logo from './logo.svg';

import './App.css';
import Fade from 'react-bootstrap/Fade';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import homeImage from './Home.png';
import homeLogo from './Logo.png';
import photo1 from './Photo1.png';
import photo2 from './Photo2.png';
import photo3 from './Photo3.png';
import photo4 from './Photo4.png';
import photo5 from './Photo5.png';
import photo6 from './Photo6.png';
import photo7 from './Photo7.png';





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
      <div class="fade-inNav">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent ">
        
  <img Style="outline-color:#f5d090;
	
	animation: pulse 2s infinite;" class="w-50"src = {homeLogo}/> 
  <div class = "col-sm"></div>
  <button class="btn btn-transparent border-dark float-end me-5 btn-lg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></button>


 
</nav>
</div>
            

    

    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="offcanvasRightLabel">Menu</h1>
    <button type="button" class="btn-close btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  
   
  <h2 class="mb-3 mt-5" data-bs-dismiss="offcanvas" onClick={()=>showHome()}>Home</h2>

  <h2 class="mb-3" data-bs-dismiss="offcanvas"  onClick={()=>showServices()}>Services</h2>

  <h2 class="mb-3" data-bs-dismiss="offcanvas"  onClick={()=>{window.location.href= "https://beautyservices.ulta.com/login"}}>Book Appointment</h2>


  
  <h2 class="mb-3" data-bs-dismiss="offcanvas"  onClick={()=>showGallary()}>Gallery</h2>

  
  </div>
</div>

    
    <div id ="home" >
      <div class="fade-in">
      <div class="container w-100">
      <img src = {homeImage} className='w-100 h-100'/> 
  
</div>
<div class="border border-dark border-4 m-4 p-2">
      <div className="card rounded m-4 p-3 bg-dark text-light" >

      <div class=" p-5  bg-dark overflow-auto "  Style="height: 450px;" >
        <h3>Welcome to Nahid's Hair Services!</h3>
          <p className='text-light '>

Are you seeking a hair stylist who understands the unique needs and desires of each client? Look no further! I'm Nahid, and I'm passionate about helping you look and feel your absolute best.

Located conveniently at 2059 Scenic Hwy N Suite 107, Snellville, GA 30078, inside Ulta, Nahid's Hair Services is your go-to destination for all your hair care needs. With years of experience and a commitment to excellence, I offer a wide range of services tailored to suit your individual style and preferences.

Whether you're in need of a fresh haircut, a vibrant color transformation, or a sleek new hairstyle for a special occasion, I've got you covered. My goal is to not only enhance your natural beauty but also to provide you with an unforgettable salon experience.

At Nahid's Hair Services, you can expect personalized attention, top-notch professionalism, and results that exceed your expectations. Your satisfaction is my priority, and I'll work closely with you to ensure that you leave feeling confident and radiant every time.

Join me at Nahid's Hair Services and let's embark on a journey to discover your perfect look together. Schedule your appointment today and let's make your hair dreams a reality!</p>

         </div>
       
    </div>
    </div>
   
       
      
      </div>
      
</div>
    

    <div id ="services" Style="display:none
                                    " >
        <div class="border border-dark border-4 m-4 p-2">

    <div class="fade-in float-center ">
    <div class="accordion m-3"  id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Haircut
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Bang Trim</h5>
    <h6 class="card-subtitle mb-2 text-muted">$10.00</h6>
    
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Clipper Cut</h5>
    <h6 class="card-subtitle mb-2 text-muted">$37.00</h6>
    
  </div>
</div></div>
    <div class="w-100"></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Curl Haircut</h5>
    <h6 class="card-subtitle mb-2 text-muted">$72.00</h6>
   
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Haircut</h5>
    <h6 class="card-subtitle mb-2 text-muted">$57.00</h6>
    
  </div>
</div></div>
    <div class="w-100"></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Kid's Haircut</h5>
    <h6 class="card-subtitle mb-2 text-muted">$25.00</h6>
   
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Signiture Curl Haircut</h5>
    <h6 class="card-subtitle mb-2 text-muted">$82.00</h6>
    
  </div>
  
</div></div>
<div class="w-100"></div>
<div class="col p-2">
<div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Signiture Haircut</h5>
    <h6 class="card-subtitle mb-2 text-muted">$67.00</h6>
    
  </div>
  </div>

</div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Hair Color
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Accent Highlight</h5>
    <h6 class="card-subtitle mb-2 text-muted">$87.00</h6>
 
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">All-Over Color</h5>
    <h6 class="card-subtitle mb-2 text-muted">$87.00</h6>
    
  </div>
</div></div>
    <div class="w-100"></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Express Full Root Touch-up</h5>
    <h6 class="card-subtitle mb-2 text-muted">$65.00</h6>
    
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Full Highlight</h5>
    <h6 class="card-subtitle mb-2 text-muted">$147.00</h6>
    
  </div>
</div></div>
    <div class="w-100"></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Full Root Touch-Up</h5>
    <h6 class="card-subtitle mb-2 text-muted">$72.00</h6>
   
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Gloss</h5>
    <h6 class="card-subtitle mb-2 text-muted">$67.00</h6>
    
  </div>
</div></div>
<div class="w-100"></div>
<div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Partial Highlight</h5>
    <h6 class="card-subtitle mb-2 text-muted">$127.00</h6>
    
  </div>
</div></div>
<div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Total Blonde</h5>
    <h6 class="card-subtitle mb-2 text-muted">$122.00</h6>
    
  </div>
</div></div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Hair Styling
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Blowout</h5>
    <h6 class="card-subtitle mb-2 text-muted">$42.00</h6>
    
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Blowout Add-on</h5>
    <h6 class="card-subtitle mb-2 text-muted">$20.00</h6>
 
  </div>
</div></div>
    <div class="w-100"></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Curling or Flat Iron Style</h5>
    <h6 class="card-subtitle mb-2 text-muted">$32.00</h6>
    
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Formal Style</h5>
    <h6 class="card-subtitle mb-2 text-muted">$77.00</h6>

  </div>
</div></div>
    
   
  </div>
</div>
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Hair Treatments
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Deep Conditioning Treatment</h5>
    <h6 class="card-subtitle mb-2 text-muted">$22.00</h6>
    
  </div>
</div></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Express Keratin Treatment</h5>
    <h6 class="card-subtitle mb-2 text-muted">$105.00</h6>
   
  </div>
</div></div>
    <div class="w-100"></div>
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Keratin Treatment</h5>
    <h6 class="card-subtitle mb-2 text-muted">$222.00</h6>
    
  </div>
</div></div>
    
   
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Curls
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col p-2"><div class="card bg-transparent border border-dark" Style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Silk Press/Wrap and Curl</h5>
    <h6 class="card-subtitle mb-2 text-muted">$72.00</h6>
    
  </div>
</div></div>
   
  </div>
</div>
      </div>
    </div>
  </div>
  
</div>
        </div>
        </div>
        </div>
    <div id ="Gallary" class="h-100"  Style="display:none" >
      <div class="fade-in">
      

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
 
  
  <div class="container  w-50">
  <div class="border border-dark border-4 m-4 p-3 d-flex align-items-center justify-content-center">

  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src={photo1} class="d-block w-100 grow" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={photo2} class="d-block w-100 grow" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={photo3} class="d-block w-100 grow" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={photo4} class="d-block w-100 grow" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={photo5} class="d-block w-100 grow" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={photo6} class="d-block w-100 grow" alt="..."/>
      
    </div>
    <div class="carousel-item">
      <img src={photo7} class="d-block w-100 grow" alt="..."/>
      
    </div>
    
  </div>
  </div>
  <div class="carousel-indicators mt-5">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"  aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
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



    
    <hr Style="margin: auto;" className='w-75 border border-dark  mt-5 mb-2' ></hr>
  
    <div class = "fade-inNav">
    
    <div className='text-center'>
      
    <button onClick={()=>{window.location.href="mailto:suraiyanahid74@icloud.com"}}  type="button" class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></button>
    <button onClick={()=>{window.location.href="https://www.facebook.com/profile.php?id=61557179235334&is_tour_completed=true"}} type="button" class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></button>
    <button onClick={()=>{window.location.href="https://www.instagram.com/nahidhairservices/?next=%2F"}}type="button" class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></button>
    <button onClick={()=>{window.location.href="https://www.tiktok.com/@nahidhairservices"}}type="button"  class="btn btn-outline-dark rounded-circle m-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg></button>
    </div>
    <div class="border border-dark border-4 m-4 p-2">
    <div class="card bg-dark text-light m-3 rounded" >

    <h6 className='mt-3'> Phone number: 770-912-1009</h6>
    <h6> Address: 2059 Scenic Hwy N Suite 107, Snellville, GA 30078 Inside Ulta</h6>
    
    <p> Created by Maher Jahan</p>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
