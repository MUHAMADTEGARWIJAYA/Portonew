
import TabContent from "./NavSkillData";


const SkillsNavbar = () => {


  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
      
        <div>{TabContent()}</div>
      </div>
    </div>
  );
};

export default SkillsNavbar;
