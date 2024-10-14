import Link from "next/link";

// TODO
const Homepage = () => {
  return (
    <div>
      <Link
        href="/dashboard"
        className="myTitle"
      >
        See Dashboard
      </Link>
    </div>
  );
};

export default Homepage;
