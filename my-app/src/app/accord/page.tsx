// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { InfoIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Alert,
//   AlertAction,
//   AlertDescription,
//   AlertTitle,
// } from "@/components/ui/alert";

// const AccordPage = () => {
//   return (
//     <div className="flex justify-center items-center h-full">
//       <main className="w-[500px] p-4">
//         <Accordion type="single" collapsible defaultValue={"item-1"}>
//           <AccordionItem value="item-1">
//             <AccordionTrigger>Is it accessible?</AccordionTrigger>
//             <AccordionContent>
//               Yes. It adheres to the WAI-ARIA design pattern.
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       <Alert>
//         <InfoIcon />
//         <AlertTitle>Heads up!</AlertTitle>
//         <AlertDescription>
//           You can add components and dependencies to your app using the cli.
//         </AlertDescription>
//         <AlertAction>
//           <Button variant="outline">Enable</Button>
//         </AlertAction>
//       </Alert>
//       </main>
//     </div>
//   );
// };

// export default AccordPage;
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InfoIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AccordPage = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="flex justify-center items-center h-full">
      <main className="w-[500px] p-4 space-y-4">
        <Accordion type="single" collapsible defaultValue={"item-1"}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button variant="outline" onClick={() => setShowAlert(true)}>
          Enable
        </Button>

        {showAlert && (
          <Alert>
              <X
                className="absolute top-3 right-3 h-4 w-4 cursor-pointer"
                onClick={() => setShowAlert(false)}
              />
            <InfoIcon />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
        )}
      </main>
    </div>
  );
};

export default AccordPage;
