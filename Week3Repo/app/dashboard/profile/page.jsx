export const metadata = {
  title: "Profile — Launchpad Week 3",
  description: "User profile page for the Launchpad Week 3 dashboard. View and edit your account information, avatar, and preferences.",
  keywords: ["launchpad","profile","user","account","dashboard","settings","nextjs",],
  authors: [{ name: "Shivang Jha" }],
};

import Userprofile from "../../../components/ui/Userprofile";

export default function Home() {
  return (
    <div>
      <Userprofile />
    </div>
  );
}
