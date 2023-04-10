import AboutLogoImg from '../images/restaurant.jpg';

function AboutTop(){
    return(
        <div className='Home-Top'>
            <div><img src={AboutLogoImg} /></div>
            <div>
                <h1>Welcome to About Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam vel laborum tempore pariatur sapiente dolores neque optio quod hic earum excepturi dicta, similique labore libero mollitia? Illum, non eos?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis ad dignissimos veritatis omnis quidem odio illo, reprehenderit aliquam laborum pariatur suscipit delectus enim, distinctio totam, tempora doloremque quisquam animi?</p>
            </div>
        </div>
        
    )
}

export default AboutTop;