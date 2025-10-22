import { Link } from "react-router-dom";

export default function Home() {
  const links = [
    {
      title: "Task management",
      url: "/taskList",
    },
    {
      title: "Add a task",
      url: "/taskCreation",
    },
  ];

  return (
    <>


      <div id="section-home">
        <h1>Task Management Application</h1>

        <div>
          <p id="subTitle">
            A place where you can manage your tasks and add new ones
          </p>
          <div className="flex-center">
            {links.map((item) => (
              <Link cl to={item.url} className="link-home">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
