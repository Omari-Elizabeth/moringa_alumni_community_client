// First Screen to appear to user.
import Logo from "../img/homelogo.png"
const Home = () => {
    return (
        <>
        <img src={Logo} alt="logo"  width={100} height={100} />
            <p>
                Many graduates struggle with getting opportunities for work and mentorship while
                others have opportunities they want to share with their fellow former students and
                often have no platform to do that.
            </p>
        </>
     );
}
export default Home;