function Contact(props) {
    const [data,handleChange] = props;
    return (
        <>
            <form className = "formContainer">
                <h1 className = "formTitle">Contact Info</h1>
                <div class = "formDiv">
                    <label class="formLabel">
                        <span class="labelTitle">Email:</span>
                        <input type="text" name="email" id="email" placeholder="john@gmail.com" onChange = {handleChange} value = {data.email}></input>
                    </label>
                </div>
                
                <div class = "formDiv">
                    <label class="formLabel">
                        <span class="labelTitle">Phone Number:</span>
                        <input type="text" name="phone" id="phone" placeholder="777-345-1234" onChange = {handleChange} value = {data.phone}></input>
                    </label>
                </div>
    
                <div class = "formDiv">
                    <label class="formLabel">
                        <span class="labelTitle">Location:</span>
                        <input type="text" name="location" id="location" placeholder="Amsterdam, NL" onChange = {handleChange} value = {data.location}></input>
                    </label>
                </div>
                
                <div class = "formDiv">
                    <label class="formLabel">
                        <span class="labelTitle">Website:</span>
                        <input type="text" name="website" id="website" placeholder="hello@github.com" onChange = {handleChange} value = {data.website}></input>
                    </label>
                </div>
                
            </form>
        </>
        )
}

export default Contact;