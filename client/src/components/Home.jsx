import Post from './Post'

const Home = () => {

    return(
        <div className="home-container">
            <div className="home-title">
             <h1>ADVENTURE TRAVEL BLOG</h1>
            </div>
            <div className="posts-container">
                <Post />
            </div>
        </div>
    )
}

export default Home