import { Auth } from "@/widgets/auth";
import { AuthBar } from "@/widgets/authbar";

export const AuthPage = () => {
  return (
    <section className="auth">
      <AuthBar />
      <Auth />
    </section>
  );
};
