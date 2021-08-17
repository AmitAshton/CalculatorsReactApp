import React from "react";

function Bmr() {
  const [gender, setGender] = React.useState("")
  const [weight, setWeight] = React.useState("")
  const [height, setHeight] = React.useState("")
  const [age, setAge] = React.useState("")
  const [bmr, setBmr] = React.useState("")
  let finalBMR;
  function setGender1(){
    setGender("Men")
  }
  function setGender2(){
    setGender("Women")
  }
  function handleChange1(event){
    let newWeight = event.target.value
    setWeight(newWeight)
  }
  function handleChange2(event){
    let newHeight = event.target.value
    setHeight(newHeight)
  }
  function handleChange3(event){
    let newAge = event.target.value
    setAge(newAge)
  }
  function handleSubmit(event){
    if(gender === "Men"){
      finalBMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    }else{
      finalBMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age)
    }
    setBmr(finalBMR.toFixed(2));
    event.preventDefault();
}
  return (
    <div className="classic">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <form  onSubmit={handleSubmit} >
          <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={setGender1} value={"Men"}></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Man
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  onClick={setGender2} value={"Women"}></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Women
  </label>
</div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Enter your weight</span>
            <input type="number" onChange={handleChange1} value={weight} placeholder="Weight in kg" min="0" class="form-control " aria-label="Weight" aria-describedby="basic-addon1" required></input>
            </div>
            <br></br>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Enter your height</span>
            <input type="number" onChange={handleChange2} min="140" step="1" max="272" value={height} class="form-control" placeholder="Height in centimeters" ria-label="Height" aria-describedby="basic-addon2" required></input>
            </div>
            <br></br>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">Enter your age</span>
            <input type="number" onChange={handleChange3} min="12" step="1" max="120" value={age} class="form-control" placeholder="Age in years" ria-label="Age" aria-describedby="basic-addon3" required></input>
            </div>
            <br></br>
            <label>Submit your inputs</label>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">BMR Calculator</h1>
            <p class="bmip">
            The basal metabolic rate (BMR) is the amount of energy needed while resting in a temperate environment when the digestive system is inactive.
            <br></br>
             It is the equivalent of figuring out how much gas an idle car consumes while parked. In such a state, energy will be used only to maintain vital organs,
            <br></br>
            which include the heart, lungs, kidneys, nervous system, intestines, liver, lungs, sex organs, muscles, and skin.
            </p>
          </div>
        </div>
        <p class="BMIp">your BMR is... {bmr}</p>
        <div class="row align-items-center my-5">
        <div class="col-lg-5 higher-line">
            <h1 class="font-weight-bold">So... What should I do now with my diet?</h1>
            <p>
            If you want to lose weight - build a menu of 1200-1300 of calories.
            <br></br> 
            If you want to gain mass - build a menu of 1700-2000 calories.	
            <br></br>
            If you want to stay in your position - build a menu of 1600 calories.
            </p>
          </div>
          <div class="col-lg-7">
        <img
              class="img-fluid rounded mb-4  "
              src="data:image/jpeg;base64,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"
              alt="BMR"
            />
        </div>
          </div>

        </div>
      </div>
  );
}

export default Bmr;