import BlocProject from "./Containers/BlocProject";

function BlocProjectList() {
  return (
    <div>
    <ul className="flex flex-row pr-5 pl-5 pb-2">
        <BlocProject img_url="src/assets/ProjectImages/Calculadora.svg" link="https://github.com/LeoMallet04/Calculator" ></BlocProject>
        <BlocProject img_url="src/assets/ProjectImages/WeatherWeb.svg" link="https://github.com/LeoMallet04/Weather-Web" ></BlocProject>
        <BlocProject img_url="src/assets/ProjectImages/MovieReview.svg" link="https://github.com/LeoMallet04/MovieReview"></BlocProject> 
    </ul>
    </div>
  );
}
export default BlocProjectList;