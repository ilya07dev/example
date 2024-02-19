import { Balance } from "@/widgets/balance";
import { Header } from "@/widgets/header";
import { Projects } from "@/widgets/projects/ui/Projects";
import { Referals } from "@/widgets/referals";
import { Sidebar } from "@/widgets/sidebar";
import { Statistic } from "@/widgets/statistic";

export const HomePage = () => {
  return (
    <main>
      <Header />
      <section>
        <Sidebar />
        <div className="container">
          {" "}
          <Balance />
          <Statistic />
        </div>
        <div className="body">
          <Referals />
          <Projects />
        </div>
      </section>
    </main>
  );
};
