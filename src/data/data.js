import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const data = [
    {
        id: 1,
        title: "Website Absensi Online",
        description: "Website berbasis absensi online dengan take foto dan info lokasi.",
        gif: "./src/assets/images/absensi.gif",
        technologies: [
          { name: "React", icon: <FaReact /> },
          { name: "Mysql", icon: <SiMysql /> },
        ]
    }, {
        id: 2,
        title: "Website Organisasi",
        description: "Website organisasi dengan landing page dan admin dashboard.",
        gif: "./src/assets/images/organisasi.gif",
        technologies: [
          { name: "React", icon: <FaReact /> },
          { name: "Mysql", icon: <SiMysql /> },
        ]
    }

    ]

export default data




