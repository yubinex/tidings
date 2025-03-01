import healthImg from "../assets/images/health.jpg";
import nationImg from "../assets/images/nation.jpg";
import scienceImg from "../assets/images/science.jpg";
import sportsImg from "../assets/images/sports.jpg";
import techImg from "../assets/images/tech.jpg";
import userImg from "../assets/images/user.jpg";
import worldImg from "../assets/images/world.jpg";
import Calendar from "./Calendar";
import "./News.css";
import Weather from "./Weather";

const News = () => {
    return (
        <div className="news">
            <header className="news-header">
                <h1 className="logo">News & Blogs</h1>
                <div className="search-bar">
                    <form>
                        <input type="text" placeholder="Search News..." />
                        <button type="submit">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </form>
                </div>
            </header>
            <div className="news-content">
                <div className="navbar">
                    <div className="user">
                        <img src={userImg} alt="User Image" />
                        <p>Mary's Blog</p>
                    </div>
                    <div className="categories">
                        <h1 className="nav-heading">Categories</h1>
                        <div className="nav-links">
                            <a href="#" className="nav-link">
                                General
                            </a>
                            <a href="#" className="nav-link">
                                World
                            </a>
                            <a href="#" className="nav-link">
                                Business
                            </a>
                            <a href="#" className="nav-link">
                                Technology
                            </a>
                            <a href="#" className="nav-link">
                                Entertainment
                            </a>
                            <a href="#" className="nav-link">
                                Sports
                            </a>
                            <a href="#" className="nav-link">
                                Science
                            </a>
                            <a href="#" className="nav-link">
                                Health
                            </a>
                            <a href="#" className="nav-link">
                                Nation
                            </a>
                            <a href="#" className="nav-link">
                                Bookmarks{" "}
                                <i className="fa-regular fa-bookmark"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="news-section">
                    <div className="headline">
                        <img src={techImg} alt="Headline Image" />
                        <h2 className="headline-title">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            <i className="fa-regular fa-bookmark bookmark" />
                        </h2>
                    </div>
                    <div className="news-grid">
                        <div className="news-grid-item">
                            <img src={techImg} alt="News Image" />
                            <h3>
                                Lorem ipsum dolor sit amet.
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={sportsImg} alt="News Image" />
                            <h3>
                                Lorem ipsum dolor sit amet.
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={scienceImg} alt="News Image" />
                            <h3>
                                Lorem ipsum dolor sit amet.
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={worldImg} alt="News Image" />
                            <h3>
                                Lorem ipsum dolor sit amet.
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={healthImg} alt="News Image" />
                            <h3>
                                Lorem ipsum dolor sit amet.
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
                        <div className="news-grid-item">
                            <img src={nationImg} alt="News Image" />
                            <h3>
                                Lorem ipsum dolor sit amet.
                                <i className="fa-regular fa-bookmark bookmark"></i>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="my-blogs">My Blogs</div>
                <div className="weather-calendar">
                    <Weather />
                    <Calendar />
                </div>
            </div>
            <footer className="news-footer">Footer</footer>
        </div>
    );
};

export default News;
