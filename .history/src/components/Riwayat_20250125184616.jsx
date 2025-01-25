import { motion } from "framer-motion";

const stats = [
  { id: 1, value: "15+", label: "Years of Experience" },
  { id: 2, value: "100+", label: "Projects Completed" },
  { id: 3, value: "30+", label: "Satisfied Clients" },
];

const StatsSection = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto flex justify-around items-center">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: stat.id * 0.2 }}
          >
            <p className="text-4xl font-bold">{stat.value}</p>
            <p className="text-lg mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
