import Calendar from "./Calendar";
import "./News.css";
import Weather from "./Weather";

const News = () => {
    return (
        <div className="news">
            <header className="news-header">News Header</header>
            <div className="news-content">
                <div className="navbar">
                    <div className="user">User</div>
                    <div className="categories">Categories</div>
                </div>
                <div className="news-section">
                    <div className="headline">Headline</div>
                    <div className="news-grid">News Grid</div>
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
