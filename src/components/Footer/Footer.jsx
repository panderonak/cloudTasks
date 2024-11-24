import { Link } from "react-router-dom";
import { Container } from "../../components";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year); // Year only

  return (
    <section className="relative overflow-hidden py-20 bg-[#061A40] text-[#C6D8FF]">
      <Container>
        <div className="flex h-full flex-col justify-between items-center">
          <div className="text-[#B9D6F2] mb-4">
            <p className="text-base font-bold">
              &copy; {year} My Todo App. Crafted with ❤️ using React and a
              powerful API backend. All rights reserved by Ronak.
            </p>
          </div>
          <div>
            <p className="text-sm">
              Need assistance? Check out the GitHub{" "}
              <span className="underline font-semibold cursor-pointer">
                {
                  <Link to={"https://github.com/panderonak/cloudTasks"}>
                    repository
                  </Link>
                }
              </span>{" "}
              for more details.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
