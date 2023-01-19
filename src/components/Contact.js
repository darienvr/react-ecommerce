const Contact = () =>{
    return(
        <section className='contact-container'>
            <div className='info-contact'>
                <h2 className='title-contact'>Join our newsletter and get 20% off</h2>
                <p className='text-contact'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
            </div>  
            <div>      
                <form className='form-contact'>
                    <input placeholder='Enter Mail' className='input-contact'></input>
                    <button className='btn-sub'>Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;