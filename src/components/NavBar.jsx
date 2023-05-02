
import '../css/Nav.css'
export default function NavBar() {
    return <>
        <div className="nav">
            <div className="nav-left">
                <h3>MEDIA-RECORDER</h3>
            </div>
            <div className="nav-right">
                <div className="social">
                    <ul id='media'>
                        <li> <a href='https://www.instagram.com/__abhisheksinghrana/'>instagram</a></li>
                        <li><a href='https://www.linkedin.com/in/abhishek-singh-rana-6354a9180/'>likedin</a></li>
                        <li> <a href='https://github.com/abhishek72340?tab=repositories'>github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}