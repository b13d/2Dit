// import Link from "next/link";
import { Link } from "react-router-dom";

export function Header({ setTaskID }) {
  return (
    <header>
      <div className="container flex gap-5">
        <Link onClick={() => setTaskID(1)} href="">
          Task1
        </Link>
        <Link onClick={() => setTaskID(2)} href="">
          Task2
        </Link>
        <Link onClick={() => setTaskID(3)} href="">
          Task3
        </Link>
        <Link onClick={() => setTaskID(4)} href="">
          Task4
        </Link>
        <Link onClick={() => setTaskID(5)} href="">
          Task5
        </Link>
      </div>
    </header>
  );
}
