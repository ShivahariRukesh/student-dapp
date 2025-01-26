import Link from "next/link";
import ViewStudentList from "./components/ViewStudentsList/page";
export default function Home() {
  return (<>

  <div className="h-[80vh]">

  <Link href={"/login"}>Click to  login</Link>

  <ViewStudentList/>
  </div>

  </>

  );
}
