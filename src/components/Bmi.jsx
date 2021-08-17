import React from "react";

function Bmi() {
  let finalBMI;
  const [weight, setWeight] = React.useState("")
  const [height, setHeight] = React.useState("")
  const [BMI, setBMI] = React.useState()
  function handleChange1(event){
    let newWeight = event.target.value
    setWeight(newWeight)
  }
  function handleChange2(event){
    let newHeight = event.target.value
    setHeight(newHeight)
  }
  function handleSubmit(event){
      finalBMI = weight / (height * height)
      setBMI(finalBMI.toFixed(2));
      event.preventDefault();
  }
  return (
    <div className="bmi">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Enter your weight</span>
            <input type="number" onChange={handleChange1} value={weight} placeholder="Weight in kg" min="0" class="form-control " aria-label="Weight" aria-describedby="basic-addon1" required></input>
            </div>
            <br></br>
            <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon2">Enter your height</span>
            <input type="number" onChange={handleChange2} min="1.4" step="0.01" value={height} class="form-control" placeholder="Height in meters" ria-label="Height" aria-describedby="basic-addon2" required></input>
            </div>
            <br></br>
            <label>Submit your inputs</label>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-bold">BMI Calculator - Metric</h1>
            <p class="bmip">
            Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters.
            <br></br> 
            A high BMI can indicate high body fatness.
            <br></br>
            BMI screens for weight categories that may lead to health problems, 
            <br></br>
            but it does not diagnose the body fatness or health of an individual.
            </p>
          </div>
        </div>
        <p class="BMIp">your BMI is... {BMI}</p>
        <div class="row align-items-center">
        <div class="col-lg-5 higher-line">
            <h1 class="font-weight-bold">Is My BMI Normal?</h1>
            <p>
            Under 18.5 - Underweight
            <br></br> 
            Between 18.5 – 24.9 - Normal range	
            <br></br>
            Between 25.0 – 29.9	- Overweight 
            <br></br>
            Above 30.0 - Obese 
            </p>
          </div>
        <div class="col-lg-7">
        <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.cdc.gov/healthyweight/images/assessing/bmi-adult-fb-600x315.jpg"
              alt="bmi"
            />
        </div>
        </div>

      
      </div>
    </div>
  );
}

export default Bmi;