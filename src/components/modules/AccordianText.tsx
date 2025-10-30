import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function AccordionText() {
    return (
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
  
        <Accordion type="single" collapsible>
          {/* Q1 */}
          <AccordionItem value="q1">
            <AccordionTrigger>
              How do I create a Digital Wallet account?
            </AccordionTrigger>
            <AccordionContent>
              You can create an account by signing up with your email and
              creating a secure password. Once registered, you’ll have access to
              all wallet features instantly.
            </AccordionContent>
          </AccordionItem>
  
          {/* Q2 */}
          <AccordionItem value="q2">
            <AccordionTrigger>
              Is my money safe in Digital Wallet?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! Digital Wallet uses industry-standard encryption and
              security protocols to protect your funds and personal information.
              Your transactions are fully secure.
            </AccordionContent>
          </AccordionItem>
  
          {/* Q3 */}
          <AccordionItem value="q3">
            <AccordionTrigger>
              Can I send money to friends or family?
            </AccordionTrigger>
            <AccordionContent>
              Yes! You can transfer money to any registered user instantly.
              Simply enter their email or wallet ID, specify the amount, and
              confirm the transaction.
            </AccordionContent>
          </AccordionItem>
  
          {/* Q4 */}
          <AccordionItem value="q4">
            <AccordionTrigger>
              Are there any fees for using Digital Wallet?
            </AccordionTrigger>
            <AccordionContent>
              Most transactions are free. Certain premium features or currency
              conversions may include small fees, which will always be displayed
              before confirming a transaction.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    )
  }
  