import HomeLogo from '../images/nature_home.jpg';

function Home(){
    return(
        <div className='Home-Top'>
            <div><img src={HomeLogo} /></div>
            <div>
                <h1>Welcome to Home Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis rerum asperiores autem modi hic dolore, itaque culpa sapiente aliquam recusandae sunt magni illum alias non fugiat natus maxime impedit!</p>
            </div>
        </div>
        
    )
}

export default Home;