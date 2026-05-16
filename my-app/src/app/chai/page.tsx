import { Button } from "@/components/ui/button";

function Chaipage() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>Chaipage</div>
      <button className="px-6 py-2 bg-orange-800 rounded my-3 hover:bg-orange-700">
        
        Test Button
      </button>
      <Button variant="chai">Shadcn Button</Button>
    </main>
  );
}

export default Chaipage;
