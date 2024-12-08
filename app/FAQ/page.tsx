import Footer from "../Footer/page"
import Navbar from "../Navbar/page"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export default function FAQ(){
    return(
        <>
        <Navbar />
        <div className="text-center py-12 px-24">
            <p className="text-2xl font-semibold">Questions Looks Here</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="py-12  px-24">
                <div className="py-8">
                <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What types of chairs do you offer?</AccordionTrigger>
    <AccordionContent>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
    </AccordionContent>
  </AccordionItem>
</Accordion>
                </div>

                <div className="py-8">
                <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>How can we get in touch with you?</AccordionTrigger>
    <AccordionContent>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
    </AccordionContent>
  </AccordionItem>
</Accordion>
                </div>
                <div className="py-8">
                <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What will be delivered? And When?</AccordionTrigger>
    <AccordionContent>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
    </AccordionContent>
  </AccordionItem>
</Accordion>
                </div>
                <div className="py-8">
                <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Do your chairs come with a warranty?</AccordionTrigger>
    <AccordionContent>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
    </AccordionContent>
  </AccordionItem>
</Accordion>
                </div>
            </div>

            <Footer />
            </>
    )
}