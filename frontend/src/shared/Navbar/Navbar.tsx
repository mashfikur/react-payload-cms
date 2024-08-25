import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container">
      {/* wrapper */}
      <div className="my-4 flex items-center justify-between rounded-xl bg-[#00684A] px-4 py-6">
        {/* logo */}
        <div className="text-3xl">
          <span className="font-light text-green-500">awesome</span>
          <span className="font-serif font-semibold italic text-white">
            Post
          </span>
        </div>

        {/* menu links */}
        <div className="flex items-center gap-5 text-lg text-white">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Posts</Link>
          <Link to={"/"}>Blogs</Link>
          <Link to={"/"}>Products</Link>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-3">
          <Button className="bg-green-600 duration-300 ease-in-out hover:bg-inherit">
            Log In
          </Button>
          <Button className="bg-slate-200 text-black duration-300 ease-in-out hover:bg-green-300">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
