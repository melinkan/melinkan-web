import { Metadata } from "next";

import PageTitle from "@/app/components/PageTitle";
import { Container } from "@/app/components/Container";
import { getImagesFromDirectory } from "@/app/lib/images";
import ClientGallery from "@/app/film-archive/ClientGallery";

export const metadata: Metadata = {
  title: "Film Archive - Melin Kan",
  description: "A collection of visuals created and photographed by Melin Kan.",
};

export default function AnalogGallery() {
  const images = getImagesFromDirectory("analog");

  const serializedImages = JSON.stringify(images);

  return (
    <>
      <Container>
        <PageTitle title="Film Archive" />
        <ClientGallery serializedImages={serializedImages} />
      </Container>
    </>
  );
}
