import ApiButton from "@/components/ApiButton";
import FakeStore from "@/components/FakeStore";

export default function Home() {
  return (
    <main>
      <h1>International Schooling</h1>
      <p>
        Flexible online education for students worldwide.
      </p>

      <img src="/file.svg" alt="file-image" width={30} height={40}></img>

      <ApiButton/>

      <FakeStore/>
    </main>

  );
}
