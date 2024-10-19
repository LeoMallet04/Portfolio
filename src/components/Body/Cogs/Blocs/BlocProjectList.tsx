import BlocProject from "./Containers/BlocProject";

function BlocProjectList() {
  return (
    <div>
    <ul className="flex flex-row pr-5 pl-5 pb-2">
        <BlocProject img_url="src/assets/ProjectImages/calculadora.png" link="https://github.com/LeoMallet04/Calculator" ></BlocProject>
        <BlocProject img_url="src/assets/ProjectImages/weatherweb.png" link="https://github.com/LeoMallet04/Weather-Web" ></BlocProject>
        <BlocProject img_url="src/assets/ProjectImages/moviereview.png" link="https://github.com/LeoMallet04/MovieReview"></BlocProject> 
    </ul>
    </div>
  );
}
export default BlocProjectList;