import logo from './images/nature_home.jpg';

function Home(){
    return(
        <div className='Home-Top'>
            <div><img src={logo} /></div>
            <div><h1>Welcome to Home Page</h1></div>
        </div>
        
    )
}

export default Home;