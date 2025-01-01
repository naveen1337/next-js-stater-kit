import AppNavBar from "@/shared-ui/molecules/app-navbar";

export default function Home() {
  return (
    <div>
      <AppNavBar />
      <p>Hello</p>
      <div className="bg-yellow-50 h-screen"></div>
      <div className="bg-yellow-100 h-screen"></div>
    </div>
  );
}