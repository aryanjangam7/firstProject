import AboutLogo from '../images/nature_about.jpg';

function About(){
    return(
        <div className='Home-Top'>
            <div><img src={AboutLogo} /></div>
            <div>
                <h1>Welcome to About Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam vel laborum tempore pariatur sapiente dolores neque optio quod hic earum excepturi dicta, similique labore libero mollitia? Illum, non eos?</p>   
            </div>
        </div>
        
    )
}

export default About;