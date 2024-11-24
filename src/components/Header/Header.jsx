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
    <header className="bg-[#0A2463] py-4">
      <Container>
        <nav>
          <ul className="flex justify-center items-center font-sans text-3xl gap-7">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className="text-[#B3C9D2] bg-[#247BA0] px-5 rounded-3xl text-[1.5rem]"
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
