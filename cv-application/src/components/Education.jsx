function Education(props) {
    return (
        <>
            <form className = "formContainer">
                <h1 className = "formTitle">Education</h1>
                <div class = "formDiv">
                    <label class="formLabel">
                        <span class="labelTitle">University:</span>
                        <input type="text" name="email" id="email" placeholder="john@gmail.com"></input>
                    </label>
                </div>
                
                <div class = "formDiv">
                    <label class="formLabel">
                        <span class="labelTitle">Degree:</span>
                        <input type="text" name="phone" id="phone" placeholder="777-345-1234"></input>
                    </label>
                </div>
    
                <div class = "formDiv">
                    <label class="formLabel">
                        <span class="labelTitle">Major:</span>
                        <input type="text" name="location" id="location" placeholder="Amsterdam, NL"></input>
                    </label>
                </div>
                
                <div class = "formDiv">
                    <label class="formLabel">
                        <span class="labelTitle">Dates Attended:</span>
                        <input type="text" name="website" id="website" placeholder="hello@github.com"></input>
                    </label>
                </div>
                
            </form>
        </>
        )
}

export default Education;