import { ExplorerTabs } from "@/components";

const HomePage: React.FC = () => {
  return (
    <main>
      <div className="bg-gray-400 min-h-[50svh] grid place-items-center">
        Some crazy content
      </div>
      <ExplorerTabs contractAddress="EQDJ9oMAGOnweeKXQpxOtCclEsbOcNjOxsgurwHc8cbSmzji" />
    </main>
  );
};

export default HomePage;
