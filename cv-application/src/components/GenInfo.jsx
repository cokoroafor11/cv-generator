/*This function is going to take in name (first/last), Title, summary */
function GenInfo(props) {
    const [data,handleChange] =props;
    return (
    <>
        <form className = "formContainer">
            <h1 className = "formTitle">General Info</h1>
            <div className = "formDiv">
                <label className="formLabel">
                    <span className="labelTitle">First Name:</span>
                    <input type="text" name="firstName" id="firstName" placeholder="Lebron" onChange = {handleChange} value = {data.firstName}></input>
                </label>
            </div>
            
            <div className = "formDiv">
                <label className="formLabel">
                    <span className="labelTitle">Last Name:</span>
                    <input type="text" name="lastName" id="lastName" placeholder="James" onChange = {handleChange} value = {data.lastName}></input>
                </label>
            </div>

            <div className = "formDiv">
                <label className="formLabel">
                    <span className="labelTitle">Occupation:</span>
                    <input type="text" name="occupation" id="occupation" placeholder="Blaze Pizza Owner" onChange = {handleChange} value = {data.occupation}></input>
                </label>
            </div>

            <div className = "formDiv">
                <label className="formLabel">
                    <span className="labelTitle">Summary:</span>
                    <input type="textarea" name="summary" id="summary" placeholder="Owner of a fast casual pizza restaurant." onChange = {handleChange} value = {data.summary}></input>
                </label>
            </div>
        </form>
    </>
    )
}

export default GenInfo;