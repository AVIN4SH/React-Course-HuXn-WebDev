import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-black">
      <Button className="bg-black border border-white text-white hover:bg-white hover:text-black hover:scale-125 transition-all duration-100">
        React
      </Button>
    </div>
  );
}

export default App;
