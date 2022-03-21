import { useRouter } from "next/router";

const ClientProject = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>Especific client project</h1>;
};

export default ClientProject;
