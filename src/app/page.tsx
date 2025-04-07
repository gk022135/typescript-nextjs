
import Image from "next/image";

export default function Home() {
  console.log("hello", process.env.NEXT_PUBLIC_GAURAV1);
  console.log("xyz", process.env.NEXT_PUBLIC_GAURAV);

  console.log("Gaurav:", process.env.NEXT_PUBLIC_GAURAV);
  console.log("Gaurav1:", process.env.NEXT_PUBLIC_GAURAV1);

  return (
    <div>
      <h1 className="text-3xl flex justify-center content-center items-center text-center">
        Hello World
      </h1>
      <p> ;k;k;l {process.env.NEXT_PUBLIC_GAURAV}</p>
      <p>{process.env.NEXT_PUBLIC_GAURAV1}</p>
    </div>
  );
}
