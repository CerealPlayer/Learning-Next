import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>Project</h1>;
};

export default Project;
