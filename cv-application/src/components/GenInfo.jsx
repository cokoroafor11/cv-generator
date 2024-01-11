/*This function is going to take in name (first/last), Title, summary */
function GenInfo(props) {
    return (
    <>
        <form className = "formContainer">
            <h1 className = "formTitle">General Info</h1>
            <div class = "formDiv">
                <label class="formLabel">
                    <span class="labelTitle">First Name:</span>
                    <input type="text" name="firstName" id="firstName" placeholder="Lebron"></input>
                </label>
            </div>
            
            <div class = "formDiv">
                <label class="formLabel">
                    <span class="labelTitle">Last Name:</span>
                    <input type="text" name="lastName" id="lastName" placeholder="James"></input>
                </label>
            </div>

            <div class = "formDiv">
                <label class="formLabel">
                    <span class="labelTitle">Occupation:</span>
                    <input type="text" name="occupation" id="occupation" placeholder="Blaze Pizza Owner"></input>
                </label>
            </div>

            <div class = "formDiv">
                <label class="formLabel">
                    <span class="labelTitle">Summary:</span>
                    <input type="textarea" name="summary" id="summary" placeholder="Owner of a fast casual pizza restaurant. Avid basketball enthusiast."></input>
                </label>
            </div>
        </form>
    </>
    )
}

export default GenInfo;