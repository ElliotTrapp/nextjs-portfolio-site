import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview> New message from elliottrapp.com </Preview>
      <Tailwind>
        <Body className="bg-slate-100">
          <Container>
            <Section className="darkBoarder my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                {" "}
                You received the following message from elliottrapp.com{" "}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email address is {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
