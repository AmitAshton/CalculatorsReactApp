import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <h1 class="font-weight-bold">Home</h1>
            <p class="font-weight-light homep">
            Have you ever found yourself into troubles with calculating things?
            <br></br>  
            If you did, than this is the right place for you.
            <br></br>  
            Here you can find and choose lots of calculators that you can try and learn new things about yourself!
            <br></br>  
            Enjoy!
            </p>

          </div>
          <div class="col-lg-5">
          <img
              class="img-fluid rounded mb-4 mb-lg-0 homeimg"
              src="https://mymodernmet.com/wp/wp-content/uploads/2019/03/how-to-calculate-percentages-trick-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <h1 class="font-weight-bold">What can I Calculate Here?</h1>
            <p class="font-weight-light homep">
            Here, you can calculate lots of different things.
            <br></br>  
            Like BMR, BMI, and even a classic calculator!
            <br></br>  
            You can find  the background information about the calculator.
            <br></br>  
            Have Fun!
            </p>

          </div>
        </div>
        </div>

      </div>
      
  );
}

export default Home;