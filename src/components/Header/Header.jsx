import { useNavigate } from "react-router";
import { Container } from "../../components";

function Header() {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Create",
      slug: "/create",
    },
  ];
  return (
    <header className="bg-[#061A40] py-5">
      <Container>
        <nav>
          <ul className="flex justify-center items-center font-sans text-3xl gap-7">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className="text-[#B9D6F2] bg-[#005182] px-5 py-1 rounded-3xl text-[1.2rem] hover:bg-[#B9D6F2] hover:text-[#005182] duration-300 font-semibold"
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

//TODO: Home(ALL TODOS), Create()
