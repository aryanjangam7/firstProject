// import ThankYou from "./ThankYou";
function Form(){
    return(
        <>
            <div className="form-div">
                <form action="" method="post">
                        <h1 className="contact-h1">Contact to Us</h1>
                        <div><input type="text" name="username" placeholder="Enter Your Name" required/></div>
                        <div><input type="email" name="useremail" placeholder="Enter Your Email" required/></div>
                        <div><input type="tel" name="number" placeholder="Enter Your Number" required/></div>
                        <div><input type="submit" /></div>
                </form>
            </div>
        </>
        
    )
}

export default Form;