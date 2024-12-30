import {
  Github,
  Linkedin,
} from "@/components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <nav className="flex">
      <Link href={"http://www.linkedin.com/in/kulsoom-arif"} target="_blank">
        <Linkedin className="w-6 h-6" />
      </Link>
      <Link href={"https://github.com/Kulsoomarif"} target="_blank">
        <Github className="w-6 h-6 fill-dark dark:fill-light" />
      </Link>
    </nav>
  );
}
