import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormSection from "./form-section/FormSection";

import { FaPlusCircle } from "react-icons/fa";

const NewMovementSection = () => {
  return (
    <AccordionItem value="new-movement">
      <Card className="w-full">
        <AccordionTrigger className="w-full p-0">
          <CardHeader className="w-full flex items-center gap-4">
            <FaPlusCircle className="size-7" />
            <div>
              <CardTitle>Nova movimentação</CardTitle>
              <CardDescription className="">
                Preencha as informações abaixo para lançar uma nova movimentação
              </CardDescription>
            </div>
          </CardHeader>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent>
            <FormSection />
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
};

export default NewMovementSection;
