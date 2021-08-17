import React from "react";

function Classic() {
  let calculate = ""
  const [finalResult, setFinalResult] = React.useState()
  function addNumber(event){
    let newNumber = event.target.value
    calculate = calculate + newNumber
  }
  function handleSubmit(event){
    setFinalResult(eval(calculate).toFixed(2))
    event.preventDefault();
  }
  return (
    <div className="classic">
      <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-5">
            <h1 class="font-weight-light">Classic Math Calculator</h1>
            <p class="bmip high">
             Our simple math calculator is ready for you to use!
             <br></br>
             Use our math calculator to calculate simple things that you need to know when you are stuck!
             <br></br>
             Be careful! your result might be wrong if you are typing some bad math. For example:
             <br></br>
             1+-2, 01+2, 36/*7 and more...
            </p>
          </div>
          <div class="col-lg-7">
          <form  onSubmit={handleSubmit} >
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="0">0</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="1">1</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="2">2</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="3">3</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="4">4</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="5">5</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="6">6</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="7">7</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="8">8</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="9">9</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="+">+</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="-">-</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="*">*</button>
            <button type="button" class="btn btn-outline-dark margin btn-lg" onClick={addNumber} value="/">/</button>
          </div>
        </div>
        <div class="d-grid gap-2">
        <button type="submit" class="btn btn-dark">Submit</button>
    </div>
            </form>
          </div>
        </div>
        <p class="BMIp">The result is... {finalResult}</p>
      </div>
    </div>
  );
}

export default Classic;