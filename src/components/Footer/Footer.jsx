import { Link } from "react-router-dom";
import { Container } from "../../components";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="relative overflow-hidden py-20 bg-[#061A40] text-[#C6D8FF]">
      <Container>
        <div className="flex h-full flex-col justify-between items-center">
          <div className="text-[#B9D6F2] mb-4">
            <p className="text-base font-bold text-center">
              &copy; {year} My Todo App. Crafted with ❤️ using React and the
              powerful{" "}
              <span className="underline font-semibold cursor-pointer hover:text-blue-500">
                {
                  <Link
                    to={`https://freeapi.hashnode.space/freeapi-docs/freeapi`}
                    target="_blank"
                  >
                    FreeAPI
                  </Link>
                }
              </span>{" "}
              backend. All rights reserved by Ronak.
            </p>
          </div>
          <div>
            <p className="text-sm text-center">
              Need assistance? Check out the GitHub{" "}
              <span className="underline font-semibold cursor-pointer hover:text-blue-500">
                {
                  <Link
                    to={"https://github.com/panderonak/cloudTasks"}
                    target="_blank"
                  >
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
