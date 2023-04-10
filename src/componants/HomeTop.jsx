import HomeTopImg from '../images/restaurant.jpg';

function HomeTop(){
    return(
        <div className='Home-Top'>
            <div>
                <img src={HomeTopImg} />
            </div>
            <div>
                <h1>Welcome to Home Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis rerum asperiores autem modi hic dolore, itaque culpa sapiente aliquam recusandae sunt magni illum alias non fugiat natus maxime impedit!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis ad dignissimos veritatis omnis quidem odio illo, reprehenderit aliquam laborum pariatur suscipit delectus enim, distinctio totam, tempora doloremque quisquam animi?</p>
            </div>
        </div>
        
    )
}

export default HomeTop;