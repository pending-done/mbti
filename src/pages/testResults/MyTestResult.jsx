import { useUser } from "../../zustand/authStore";
import { useGetPrivateTestResultsQuery } from "../../hooks/testQueries";
import MbtiCard from "./MbtiCard";
import Loading from "../../components/Loading";

const MyTestResult = () => {
  const { userinfo } = useUser();

  const { data: testResults, isPending: isTestResultsPending } = useGetPrivateTestResultsQuery(userinfo.id);

  if (isTestResultsPending) {
    return <Loading />;
  }

  return (
    <ul className="flex flex-wrap gap-10 justify-center ">
      {testResults.map((result) => (
        <MbtiCard key={result.id} data={result} />
      ))}
    </ul>
  );
};

export default MyTestResult;
